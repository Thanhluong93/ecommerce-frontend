import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>This is the homepage of our amazing application.</p>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>User-friendly interface</li>
          <li>Responsive design</li>
          <li>Easy navigation</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;