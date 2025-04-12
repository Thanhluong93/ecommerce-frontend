import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://ecommerce-backend-1-m1ll.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("✅ Đăng ký thành công!");
        setTimeout(() => setMessage(""), 3000);
        navigate("/login"); // Điều hướng người dùng đến trang đăng nhập
      })
      .catch((err) => {
        setMessage("❌ Đăng ký thất bại. Vui lòng thử lại.");
        setTimeout(() => setMessage(""), 3000);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Đăng ký tài khoản</h2>

      {message && <p style={styles.message}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Họ và Tên:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Đăng ký</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#6a0dad", // tím đậm
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "20px",
  },
  message: {
    color: "#d4ffb2",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    backgroundColor: "#f0e6ff",
    color: "#333",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff69b4",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
