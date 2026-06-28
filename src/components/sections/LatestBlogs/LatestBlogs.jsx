import "./LatestBlogs.css";

import { blogs } from "../../../constants/blogs";
import BlogCard from "../../Blog/BlogCard/BlogCard";

const LatestBlogs = () => {
  return (
    <section className="latest-blogs">
      <div className="container">
        <h2 className="latest-blogs__title">Latest Blogs</h2>

        <div className="latest-blogs__grid">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
