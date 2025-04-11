import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return <p>Đang tải...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👤 Hồ sơ người dùng</h2>

      <img
        src={user.avatar || "../images/anh2.jpg"}
        alt="Avatar"
        style={styles.avatar}
      />

      <div style={styles.infoGroup}>
        <p><strong>Họ và Tên:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Số điện thoại:</strong> {user.phone || "Chưa cập nhật"}</p>
      </div>

      <button onClick={handleLogout} style={styles.button}>
        Đăng xuất
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "20px",
    objectFit: "cover",
    marginLeft: "160px"
  },
  infoGroup: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "30px",
    textAlign: "left",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
