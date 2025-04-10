import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createRoot } from "react-dom/client"; // ✅ thêm dòng này
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";

export default function Header() {
  useEffect(() => {
    const hasChildLinks = document.querySelectorAll("li.has-child > a");

    hasChildLinks.forEach((link) => {
      const iconContainer = document.createElement("span");
      const root = createRoot(iconContainer);
      root.render(<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "5px", fontSize: "12px" }} />);
      link.appendChild(iconContainer);
    });
  }, []);


  return (
    <div id="wrapper">
      <div id="header">
        <nav className="container">
          <Link to="/Home" id="logo">
            <img src="/images/logo.png" alt="Thanhluong.vn" />
          </Link>
          <ul id="main-menu">
            <li>
              <Link to="/">Trang Chủ</Link>
            </li>
            <li>
              <Link to="/home">Đăng nhập</Link>
              <ul className="submenu">
                <li>
                  <Link to="#">Menu 2.1</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">Menu 2.2.1</Link>
                      <ul className="submenu">
                        <li><Link to="#">Menu 2.2.1</Link></li>
                        <li><Link to="#">Menu 2.2.2</Link></li>
                        <li><Link to="#">Menu 2.2.3</Link></li>
                        <li><Link to="#">Menu 2.2.4</Link></li>
                      </ul>
                    </li>
                    <li><Link to="#">Menu 2.2.2</Link></li>
                    <li>
                      <Link to="#">Menu 2.2.3</Link>
                      <ul className="submenu">
                        <li><Link to="#">Menu 2.2.1</Link></li>
                        <li><Link to="#">Menu 2.2.2</Link></li>
                        <li><Link to="#">Menu 2.2.3</Link></li>
                        <li><Link to="#">Menu 2.2.4</Link></li>
                      </ul>
                    </li>
                    <li><Link to="#">Menu 2.2.4</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Menu 2.2</Link></li>
                <li><Link to="#">Menu 2.3</Link></li>
                <li><Link to="#">Menu 2.4</Link></li>
              </ul>
            </li>
            <li><Link to="#">LAN</Link></li>
            <li><Link to="#">Laptop</Link></li>
            <li>
              <Link to="#">CODE</Link>
              <ul className="submenu">
                <li><Link to="#">Menu 2.1</Link></li>
                <li>
                  <Link to="#">Menu 2.2</Link>
                  <ul className="submenu">
                    <li><Link to="#">Menu 2.2.1</Link></li>
                    <li><Link to="#">Menu 2.2.2</Link></li>
                    <li><Link to="#">Menu 2.2.3</Link></li>
                    <li><Link to="#">Menu 2.2.4</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Menu 2.3</Link></li>
                <li><Link to="#">Menu 2.4</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Liên hệ</Link></li>
            <li><Link to="/register">Đăng ký</Link></li>
            <li><Link to="/login">Đăng nhập</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}