import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  //const { isLoggedIn } = useAuth();
  //Placeholder for now
  const isLoggedIn = false;
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link to="#" className="nav-link">
                Profile
              </Link>
            ) : (
              <Link to="#" className="nav-link">
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
