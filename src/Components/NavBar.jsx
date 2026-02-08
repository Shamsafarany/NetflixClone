import { useState, useEffect } from "react";
import img from "../assets/icons8-netflix (1).svg";
import "../styles/navBar.css";
import "../Styles/search.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function NavBar({ type = "default" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
        {type === "default" ? (
          <>
            <div className="cont1">
              <img src={img} alt="logo" className="logo" />
              <ul>
                <Link to="/" className="li">
                  Home
                </Link>
                <Link to="/login" className="li">
                  Login
                </Link>
                <Link
                  to="/shows"
                  className={`li ${
                    location.pathname === "/shows" ? "activeBar" : ""
                  }`}
                >
                  TV Shows
                </Link>
                <Link
                  to="/movies"
                  className={`li ${
                    location.pathname === "/movies" ? "activeBar" : ""
                  }`}
                >
                  Movies
                </Link>
                <Link to="/favorites" className="li">
                  Favorites
                </Link>
                <Link to="/search" className="li">
                  Search
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="cont3">
              <img src={img} alt="logo" className="logo" />
              <button className="signIn">Sign In</button>
            </div>
          </>
        )}
        <div className="hamburger-menu">
          <FaBars className="hamburger" />
          <div className="dropdown" role="menu" aria-label="Mobile menu">
            <Link to="/" className="li dropdown-item">
              Home
            </Link>
            <Link
              to="/shows"
              className={`li dropdown-item ${
                location.pathname === "/shows" ? "activeBar" : ""
              }`}
            >
              TV Shows
            </Link>
            <Link
              to="/movies"
              className={`li dropdown-item ${
                location.pathname === "/movies" ? "activeBar" : ""
              }`}
            >
              Movies
            </Link>
            <Link to="/favorites" className="li dropdown-item">
              Favorites
            </Link>
            <Link to="/search" className="li dropdown-item">
              Search
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
