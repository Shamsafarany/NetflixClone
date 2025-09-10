import img from "../assets/icons8-netflix (1).svg";
import "../styles/navBar.css";
import search from "../assets/icons8-search (1).svg";
function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="cont1">
          <img src={img} alt="logo" className="logo" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Favorites</li>
          </ul>
        </div>
        <div className="cont2">
          <input type="text" placeholder="Search for shows..." />
          <img src={search} alt="search" className="search" />
        </div>
      </nav>
    </>
  );
}
export default NavBar;
