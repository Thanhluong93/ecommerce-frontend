import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import ArticleDetail from './pages/ArticleDetail';
import './App.css';

// Bọc phần chính lại thành component để dùng được useLocation
function AppContent() {
  const location = useLocation();
  const hideLayout = ["/login", "/register", "/admin"].includes(location.pathname);

  return (
    <div className="App">
      {!hideLayout && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
