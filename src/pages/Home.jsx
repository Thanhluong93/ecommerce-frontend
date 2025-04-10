import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import articles from '../data/articles';

const Home = () => {
  return (
    <div className="container">
    <div className="post-feature">
      <a href="/" className="post-feature-media post-media">
        <img
          src="https://cdn.dribbble.com/userupload/17382372/file/original-97c91235cd1c453ed9e345f3a87863a2.jpg?resize=1024x768"
          alt=""
          className="post-feature-image"
        />
      </a>
      <div className="post-feature-info">
        <a href="/" className="post-category">The news</a>
        <h2>
          <a href="articles/1" className="post-feature-title post-title">
            Bitcoin trên đà lần đầu tiên cán mốc 90.000 USD
          </a>
        </h2>
        <p className="post-desc">
          Trong những ngày gần đây, thị trường tiền mã hóa đang trải qua cơn sốt
          chưa từng có, đặc biệt là Bitcoin, khi đồng tiền này đã vượt qua mức giá
          80.000 USD và hiện tại đang tiến gần đến ngưỡng 90.000 USD.
        </p>
        <a href="/article" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
    </div>

    <div className="post-list">
      {/* Post 1 */}
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="https://cdn.dribbble.com/userupload/17480453/file/original-3bec65ba8e096d26d5dbed25803dd983.jpg?resize=1024x1024"
            alt=""
            className="post-image"
          />
        </a>
        <a href="articles/2" className="post-category">Shop</a>
        <h3>
          <a href="articles/2" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MRHELLO</h4>
            <time dateTime="" className="post-author-time">13/2/2025</time>
          </div>
        </a>
      </div>
      {/* Post 2 */}
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="https://cdn.dribbble.com/userupload/17487625/file/original-a1ef3696aa3b40521948adcfa442062c.png?resize=1024x804"
            alt=""
            className="post-image"
          />
        </a>
        <a href="/" className="post-category">Shop</a>
        <h3>
          <a href="/" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
      {/* Post 3 */}
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="https://cdn.dribbble.com/userupload/17474398/file/original-636d2679cca02654092ec05b47ca1db0.png?resize=1024x770"
            alt=""
            className="post-image"
          />
        </a>
        <a href="/" className="post-category">Shop</a>
        <h3>
          <a href="post.html?id=3" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="/images/anh5.jpg"
            alt=""
            className="post-image"
          />
        </a>
        <a href="/" className="post-category">Shop</a>
        <h3>
          <a href="post.html?id=3" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="/images/anh4.jpg"
            alt=""
            className="post-image"
          />
        </a>
        <a href="/" className="post-category">Shop</a>
        <h3>
          <a href="post.html?id=3" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="/images/anh3.jpg"
            alt=""
            className="post-image"
          />
        </a>
        <a href="/" className="post-category">Shop</a>
        <h3>
          <a href="post.html?id=3" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="/images/anh3.jpg"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
      <div className="post-item">
        <a href="/" className="post-media">
          <img
            src="/images/anh2.jpg"
            alt=""
            className="post-image"
          />
        </a>
        <a href="/" className="post-category">Shop</a>
        <h3>
          <a href="post.html?id=3" className="post-title">
            How to choose the best bike for spring in Australia
          </a>
        </h3>
        <p className="post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
          voluptatem? Quaerat, itaque fugit voluptate, eveniet animi aliquam non
          quisquam ipsum soluta nisi magni expedita inventore facilis maiores
          repudiandae, ullam nihil!
        </p>
        <a href="/" className="post-author">
          <img
            src="https://cdn.dribbble.com/userupload/17485458/file/original-14df872c516d361bb61de8ea029df5d8.png?resize=1024x1448"
            alt=""
            className="post-author-image"
          />
          <div className="post-author-infor">
            <h4 className="post-author-name">By MrThanh</h4>
            <time dateTime="" className="post-author-time">Just now</time>
          </div>
        </a>
      </div>
      {/* Add more posts as necessary */}
      {articles.map((article) => (
  <div key={article.id} className="post-item article-card">
    <Link to={`/articles/${article.id}`} className="article-link">
      <img className="post-image" src={article.image} alt="ảnh minh họa" />
      <p className="post-category post-category-new">{article.category}</p>
      <h2 className="post-title">{article.title}</h2>
      <p className="post-desc">{article.description}</p>

      <div className="post-author">
        <img className="post-author-image" src={article.author.avatar} alt="avatar" />
        <div className="post-author-infor">
          <span className="post-author-name">{article.author.name}</span>
          <time className="post-author-time">{article.author.time}</time>
        </div>
      </div>
    </Link>
  </div>
))}

    </div>
  </div>
  );
};
export default Home;