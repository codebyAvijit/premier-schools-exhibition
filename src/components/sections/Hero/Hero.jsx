import "./Hero.css";

import Container from "../../common/Container/Container";

import Heading from "./Left/Heading/Heading";
import Subtitle from "./Left/Subtitle/Subtitle";
import EventCards from "./Left/EventCards/EventCards";

import ImageCollage from "./Center/ImageCollage/ImageCollage";

import EnquiryForm from "./Right/EnquiryForm/EnquiryForm";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper">
          <div className="hero__left">
            <Heading />
            <Subtitle />
            <EventCards />
          </div>

          <div className="hero__center">
            <ImageCollage />
          </div>

          <div className="hero__right">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
