import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Thêm Footer ở đây */}
      </div>
    </Router>
  );
}

export default App;
