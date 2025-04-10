import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";
import { Link } from "react-router-dom";
import "./ArticleDetail.css"; // tạo file này

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) return <p>Bài viết không tồn tại.</p>;

  // Lấy các bài viết khác (liên quan)
  const relatedArticles = articles.filter((item) => item.id !== article.id);

  return (
    <div className="article-layout">
      {/* Cột trái - nội dung chính */}
      <div className="article-main">
        <h1>{article.title}</h1>
        <img src={article.image} alt={article.title} />
        <p>{article.description}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <div className="author-info">
          <img src={article.author.avatar} alt={article.author.name} />
          <div>
            <h4>{article.author.name}</h4>
            <time>{article.author.time}</time>
          </div>
        </div>
      </div>

      {/* Cột phải - bài viết liên quan */}
      <div className="article-sidebar">
        <h3>Bài viết liên quan</h3>
        {relatedArticles.map((item) => (
          <Link key={item.id} to={`/articles/${item.id}`} className="related-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleDetail;
