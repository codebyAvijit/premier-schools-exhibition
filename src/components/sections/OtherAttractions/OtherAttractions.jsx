import "./OtherAttractions.css";

import { attractionImages } from "../../../constants/otherAttractions";

import logo from "../../../assets/images/logo/star.png";
import Button from "../../common/Button/Button";
import arrowIcon from "../../../assets/svg/arrow.svg";

const OtherAttractions = () => {
  return (
    <section className="other-attractions">
      <div className="container">
        <div className="other-attractions__grid">
          <div className="other-attractions__gallery">
            {attractionImages.map((image, index) => (
              <div key={index} className={`diamond diamond--${index + 1}`}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <div className="other-attractions__logo">
            <img src={logo} alt="Premier Kidz Awards" />
          </div>

          <div className="other-attractions__content">
            <h2>Other Attractions for Parents & Kids</h2>

            <div className="other-attractions__tabs">
              <button className="active">PREMIER KIDZ AWARDS</button>

              <button>THE PARENT EXCHANGE</button>
            </div>

            <h3>Premier Kidz Awards</h3>

            <p>
              A prestigious platform celebrating young talent and building
              confidence by giving children the spotlight to shine.
            </p>

            <Button icon={arrowIcon}>TO KNOW MORE</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherAttractions;
