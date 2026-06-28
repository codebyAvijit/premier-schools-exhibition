import "./BlogHero.css";

import blogHeroBanner from "../../../assets/images/blogs/hero/blogHeroBanner.png";

import SearchBar from "../../../components/Blog/SearchBar/SearchBar";

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <img src={blogHeroBanner} alt="Blog Hero" className="blog-hero__banner" />

      <SearchBar />
    </section>
  );
};

export default BlogHero;
