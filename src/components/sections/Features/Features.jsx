import "./Features.css";

import { features } from "../../../constants/features";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features__title">
          What Makes This Exhibition a Must-Visit
        </h2>

        <div className="features__slider">
          {features.map((feature, index) => (
            <article key={index} className="features__card">
              <img src={feature} alt={`Feature ${index + 1}`} />
            </article>
          ))}
        </div>

        <div className="features__navigation">
          <button>&larr;</button>

          <button>&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
