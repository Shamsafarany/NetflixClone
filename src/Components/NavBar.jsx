import { useState } from "react";
import img from "../assets/icons8-netflix (1).svg";
import "../styles/navBar.css";
import search from "../assets/icons8-search (2).svg";
import send from "../assets/icons8-send-48.png";
import closeIcon from "../assets/icons8-close-50.png";
import {Link} from "react-router-dom";

function NavBar({ type = "default" }) {
  const [showInput, setShowInput] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  function handleInput(e) {
    if (e.target.value === "") {
      return;
    }
    setShowSearch(e.target.value.trim());
  }

  function handleShowInput() {
    setShowInput(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (showSearch === "") {
      return;
    }
    setShowSearch("");
    setShowInput(false);
  }
  function handleClearInput() {
    setShowSearch("");
    setShowInput(false);
  }

  return (
    <>
      <nav className="navBar">
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
                <Link to="/" className="li">
                  TV Shows
                </Link>
                <Link to="/" className="li">
                  Movies
                </Link>
                <Link to="/" className="li">
                  List
                </Link>
              </ul>
            </div>
            <div className="cont2">
              {showInput ? (
                <form className="searchForm" onSubmit={handleSubmit}>
                  <div className="wrapper">
                    <input
                      type="text"
                      placeholder="Search for shows..."
                      onChange={handleInput}
                      value={showSearch}
                      autoFocus
                    />
                    <img
                      src={closeIcon}
                      alt="close"
                      className="closeIcon"
                      onClick={handleClearInput}
                    />
                  </div>

                  <button type="submit" className="sendBtn">
                    <img src={send} alt="search" className="send" />
                  </button>
                </form>
              ) : (
                <img
                  src={search}
                  alt="search"
                  className="search"
                  onClick={handleShowInput}
                />
              )}
            </div>{" "}
          </>
        ) : (
          <>
            <div className="cont3">
              <img src={img} alt="logo" className="logo" />
              <button className="signIn">Sign In</button>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
export default NavBar;
