import BlogHero from "../../components/sections/BlogHero/BlogHero";
import Categories from "../../components/sections/Categories/Categories";
import FeaturedBlog from "../../components/sections/FeaturedBlog/FeaturedBlog";
import LatestBlogs from "../../components/sections/LatestBlogs/LatestBlogs";
import AllBlogs from "../../components/sections/AllBlogs/AllBlogs";

import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <BlogHero />
      <Categories />
      <FeaturedBlog />
      <LatestBlogs />
      <AllBlogs />
    </>
  );
};

export default Blogs;
