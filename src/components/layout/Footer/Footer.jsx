import "./Footer.css";

import logo from "../../../assets/images/logo/footerlogo.png";

import locationIcon from "../../../assets/svg/location.svg";
import phoneIcon from "../../../assets/svg/call.svg";
import instagramIcon from "../../../assets/svg/instagram.svg";
import facebookIcon from "../../../assets/svg/facebook.svg";
import youtubeIcon from "../../../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <img src={logo} alt="Premier Schools Exhibition" />
          </div>

          <div className="footer__info">
            <img src={locationIcon} alt="" />

            <div>
              <h4>Corporate Office:</h4>

              <p>
                Suite B-5, Ballygunge Park Tower,
                <br />
                67B Ballygunge Circular Road,
                <br />
                Kolkata - 700019
              </p>
            </div>
          </div>

          <div className="footer__info">
            <img src={locationIcon} alt="" />

            <div>
              <h4>Ahmedabad Office:</h4>

              <p>
                12/AA, Swastik Chambers, Near CU Shah College, Ashram Road,
                Ahmedabad - 380009
              </p>
            </div>
          </div>

          <div className="footer__info">
            <img src={phoneIcon} alt="" />

            <div>
              <h4>Call us on</h4>

              <p>9674805912</p>

              <p>9674585012</p>
            </div>
          </div>

          <div className="footer__social">
            <h4>Follow us on</h4>

            <div className="footer__social-icons">
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>

              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>

              <a href="#">
                <img src={youtubeIcon} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        Copyright © 2025 | All rights reserved. Premier Schools Exhibition
      </div>
    </footer>
  );
};

export default Footer;
