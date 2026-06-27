import { Link } from "react-router-dom";

import Container from "../../common/Container/Container";
import Button from "../../common/Button/Button";

import logo from "../../../assets/images/logo/logo.png";
import arrowIcon from "../../../assets/svg/arrow.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Container className="navbar__container">
        <Link
          to="/"
          className="navbar__logo"
          aria-label="Premier Schools Exhibition"
        >
          <img src={logo} alt="Premier Schools Exhibition Logo" />
        </Link>
        <div className="navbar__actions">
          <Button icon={arrowIcon}>Register Now</Button>
          {/* Mobile Hamburger */}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
