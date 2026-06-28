import "./BlogArticle.css";

import { Link, useParams } from "react-router-dom";

import { blogs } from "../../../constants/blogs";

const BlogArticle = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <section className="blog-article">
      <div className="container">
        <div className="blog-article__wrapper">
          {/* Sidebar */}

          <aside className="blog-sidebar">
            <div className="blog-sidebar__box">
              <h3>Contents</h3>

              <ul>
                <li>Lorem Ipsum</li>
                <li>Donec sodales</li>
                <li>Malesuada</li>
                <li>Aenean dapibus</li>
              </ul>
            </div>

            <div className="blog-sidebar__box">
              <h3>Follow Us</h3>

              <div className="blog-sidebar__socials">
                <span>📘</span>
                <span>📷</span>
                <span>▶</span>
              </div>
            </div>
          </aside>

          {/* Article */}

          <article className="blog-content">
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-content__image"
            />

            <h1>{blog.title}</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eaque exercitationem laboriosam accusamus, aspernatur
              autem officiis temporibus aliquid.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, labore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            <img
              src={blog.image}
              alt=""
              className="blog-content__image blog-content__image--small"
            />

            <blockquote>
              "Education is the most powerful weapon which you can use to change
              the world."
            </blockquote>

            <h2>Lorem ipsum dolor sit amet</h2>

            <ul>
              <li>First important point.</li>
              <li>Second important point.</li>
              <li>Third important point.</li>
              <li>Fourth important point.</li>
            </ul>

            <div className="blog-navigation">
              <Link to={`/blog/${Number(id) - 1 || 1}`}>← Previous Blog</Link>

              <Link to={`/blog/${Number(id) + 1}`}>Next Blog →</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
