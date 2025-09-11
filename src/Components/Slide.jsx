import img from "../assets/stranger.jpeg";
import "../Styles/carousel.css";
import logo from "../assets/netflix_732228.png";
import playBtn from "../assets/icons8-play-50.png";
function Slide({ movie , active }) {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={img} alt={movie.title} className="slideImg" />
      <div className="slideInfo">
        <div className="text">
          <div className="logoCont">
            <img src={logo} alt="Netflix Logo" className="logoSlide" />
            <span className="series">SERIES</span>
          </div>
          <h3>{movie.title}</h3>
          <p>
            {" "}
            <span>{movie.year}</span> <br />
            Info about show
          </p>
          <button className="play">
            <img src={playBtn} alt="playBtn" />
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
export default Slide;
