import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "../assets/images/hamburger.png";
import Icons from "../assets/images/man.png";
import "../assets/css/HomeNavbar.css";
import { Link } from "react-router-dom";

function HomeNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const isAdminPanel = location.pathname.startsWith("/dashboard");

  if (isAdminPanel) {
    return null;
  }
  const isAdmission = location.pathname.startsWith("/admission");

  if (isAdmission) {
    return null;
  }
  const isContact = location.pathname.startsWith("/contact");

  if (isContact) {
    return null;
  }
  const isAbout = location.pathname.startsWith("/about");

  if (isAbout) {
    return null;
  }
  const isLogin = location.pathname.startsWith("/login");

  if (isLogin) {
    return null;
  }
  const isRegister = location.pathname.startsWith("/register");

  if (isRegister) {
    return null;
  }


  return (
    <nav
      className={`home-navbar ${location.pathname === "/" ? "transparent-bg" : ""}`}
    >
      <div className="container">
        <div className="logo">
          <h2 to style={{ color: "White" }}>
            ZenCloud Ascent
          </h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img className="ham" src={Hamburger} alt="Menu Icon" />
        </div>
        <div className={`nav-elementss  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admission">Admission</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <div className="relative">
          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="im"
            src={Icons}
            alt="User Icon"
            onClick={handleDropdownToggle}
          />

          <div
            id="userDropdown"
            className={`dropdown-content ${showDropdown && "show"}`}
          >
            <div className="dropdown-list" aria-labelledby="avatarButton"></div>
            <div className="py-1">
            <Link
                to={"/login"}
                className="dropdown-item text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to={"/user-dashboard"}
                className="dropdown-item text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to={"/login"}
                className="dropdown-item text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
