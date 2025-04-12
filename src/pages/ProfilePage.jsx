import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css"; // Import file CSS

export default function ProfilePage() {
  const { user, logout, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    avatar: user?.avatar || "",
  });

  const [previewAvatar, setPreviewAvatar] = useState(user?.avatar || "");
  const [message, setMessage] = useState("");
  const [isSaved, setIsSaved] = useState(false); // Trạng thái lưu

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3002/data/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        login(data); // Cập nhật Context
        setMessage("✅ Hồ sơ đã được cập nhật thành công!");
        setIsSaved(true); // Xác nhận trạng thái đã lưu
        setTimeout(() => setMessage(""), 3000);
      })
      .catch(() => {
        setMessage("❌ Có lỗi xảy ra khi cập nhật hồ sơ.");
        setTimeout(() => setMessage(""), 3000);
      });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return <p>Đang tải...</p>;

  return (
    <div className="container-profile-page">
      <h2 className="heading">👤 Hồ sơ người dùng</h2>

      {message && <p className="message">{message}</p>}

      <img
        src={previewAvatar || "../images/anh2.jpg"}
        alt="Avatar"
        className="avatar"
      />

      {isSaved ? (
        <div className="info-section">
          <div className="info-group">
            <p className="info-label">Họ và Tên:</p>
            <p className="info-value">{formData.name}</p>
          </div>
          <div className="info-group">
            <p className="info-label">Email:</p>
            <p className="info-value">{formData.email}</p>
          </div>
          <div className="info-group">
            <p className="info-label">Số điện thoại:</p>
            <p className="info-value">{formData.phone}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Chọn ảnh đại diện:</label>
            <input type="file" accept="image/*" onChange={handleAvatarUpload} />
          </div>
          <div className="form-group">
            <label>Họ và Tên:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="input"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input"
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="input"
            />
          </div>
          <button type="submit" className="button save-button">
            Lưu thay đổi
          </button>
        </form>
      )}

      <button
        type="button"
        onClick={handleLogout}
        className="button logout-button"
      >
        Đăng xuất
      </button>
    </div>
  );
}