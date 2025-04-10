import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Đừng quên import CSS riêng

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 dùng để chuyển hướng

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "123456") {
        const user = {
          name: "Admin",
          email: email,
        };

        // ✅ Lưu vào localStorage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Đăng nhập thành công!");
        navigate("/");
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Mật khẩu:</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
