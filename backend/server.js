const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(cors());
app.use(express.json());

// Sử dụng đường dẫn tuyệt đối để truy cập users.json
const USERS_FILE = path.join(__dirname, "data", "users.json");

// GET tất cả user
app.get("/data/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  res.json(users);
});

// POST đăng nhập
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));

  const matchedUser = users.find(
    (user) => user.email === email
  );

  if (!matchedUser) {
    return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" });
  }

  // Kiểm tra mật khẩu
  bcrypt.compare(password, matchedUser.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: "Có lỗi xảy ra khi kiểm tra mật khẩu" });
    }

    if (!isMatch) {
      return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu!" });
    }

    // Trả về thông tin người dùng nếu mật khẩu đúng
    res.json(matchedUser);
  });
});

// PUT cập nhật thông tin user
app.put("/data/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// POST đăng ký người dùng
app.post("/register", [
  body("email").isEmail().withMessage("Email không hợp lệ"),
  body("password").isLength({ min: 6 }).withMessage("Mật khẩu phải có ít nhất 6 ký tự"),
  // Kiểm tra các trường khác nếu cần
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, password } = req.body;
  const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));

  // Kiểm tra xem email đã tồn tại chưa
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email đã được đăng ký!" });
  }

  // Hash mật khẩu trước khi lưu
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Có lỗi xảy ra khi hash mật khẩu" });
    }

    // Thêm người dùng mới vào danh sách
    const newUser = {
      id: users.length + 1,
      name,
      email,
      phone,
      password: hashedPassword, // Lưu mật khẩu đã được hash
    };

    users.push(newUser);

    // Lưu lại vào file
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    res.status(201).json(newUser);
  });
});

const PORT = 3002;
app.listen(PORT, () => console.log(`✅ Backend chạy tại http://localhost:${PORT}`));
