import { Link } from "react-router-dom";

import "./BlogCard.css";

const BlogCard = ({
  id,
  image,
  author,
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <article className="blog-card">
      <img src={image} alt={title} className="blog-card__image" />

      <div className="blog-card__content">
        <p className="blog-card__author">👤 By {author}</p>

        <h3>{title}</h3>

        <p className="blog-card__meta">
          {date} | {readTime}
        </p>

        <p className="blog-card__description">{description}</p>

        <Link to={`/blog/${id}`} className="blog-card__button">
          READ MORE ↗
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
