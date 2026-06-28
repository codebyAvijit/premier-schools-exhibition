import "./Testimonials.css";

import testimonialsImage from "../../../assets/images/testimonials/testimonials.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials__title">What Makes Parents Choose Us</h2>

        <div className="testimonials__image">
          <img src={testimonialsImage} alt="Visitor Reviews" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
