import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./LoginPage.css"; // Đừng quên import CSS riêng

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 dùng để chuyển hướng

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu đăng nhập đến backend
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) {
          login(data); // Lưu thông tin người dùng vào Context API
          navigate("/"); // Về trang chủ sau khi đăng nhập thành công
        } else {
          alert("Sai tài khoản hoặc mật khẩu!");
        }
      })
      .catch((error) => {
        console.error("Lỗi đăng nhập:", error);
        alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại.");
      });
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
