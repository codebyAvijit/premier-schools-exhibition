import "./FeaturedBlog.css";

import featuredImage from "../../../assets/images/blogs/featured-blog.png";
import Button from "../../common/Button/Button";
import arrowIcon from "../../../assets/svg/arrow.svg";

const FeaturedBlog = () => {
  return (
    <section className="featured-blog">
      <div className="container">
        <h2 className="featured-blog__heading">Featured Blog</h2>

        <article className="featured-blog__card">
          <div className="featured-blog__image">
            <img src={featuredImage} alt="Featured Blog" />
          </div>

          <div className="featured-blog__content">
            <span className="featured-blog__tag">Education</span>

            <h3>
              Finding the Perfect Fit: How to Choose the Right School for Your
              Child
            </h3>

            <p>
              Choosing the right school is one of the most important decisions
              parents make. Every child is unique...
            </p>

            <Button icon={arrowIcon}>Read More</Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedBlog;
