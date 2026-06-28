import { useState } from "react";

import "./Categories.css";
import { categories } from "../../../constants/categories";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="categories">
      <div className="container">
        <div className="categories__wrapper">
          {categories.map((category) => (
            <button
              key={category}
              className={`categories__button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
