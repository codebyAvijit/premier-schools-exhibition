import "./AllBlogs.css";

import { blogs } from "../../../constants/blogs";
import BlogCard from "../../Blog/BlogCard/BlogCard";

const AllBlogs = () => {
  return (
    <section className="all-blogs">
      <div className="container">
        <h2 className="all-blogs__title">All Blogs</h2>

        <div className="all-blogs__grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
