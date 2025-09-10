import img from "../assets/stranger.jpeg";
import "../Styles/carousel.css";
import logo from "../assets/netflix_732228.png";
function Slide({ movie }) {
  return (
    <div className="slide">
      <img src={img} alt={movie.title} className="slideImg" />
      <div className="slideInfo">
        <div className="text">
          <div className="logoCont">
            <img src={logo} alt="Netflix Logo" className="logoSlide" />
            <span className="series">SERIES</span>
          </div>
          <h3>
            {movie.title}
          </h3>
          <p> <span>{movie.year}</span> <br />
            Info about show</p>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}
export default Slide;
