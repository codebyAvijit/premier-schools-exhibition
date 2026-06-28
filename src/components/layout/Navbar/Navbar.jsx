import { Link, NavLink } from "react-router-dom";

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
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Blogs
          </NavLink>

          <Button icon={arrowIcon}>Register Now</Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
