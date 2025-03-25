import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // Thêm dòng này nếu file là App.js