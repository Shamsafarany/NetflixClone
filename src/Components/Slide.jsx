import img from "../assets/stranger.jpeg";
import "../Styles/carousel.css";
import logo from "../assets/netflix_732228.png";
import playBtn from "../assets/icons8-play-50.png";
function Slide({ movie, active }) {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.name}
        className="slideImg"
      />
      <div className="slideInfo">
        <div className="text">
          <div className="logoCont">
            <img src={logo} alt="Netflix Logo" className="logoSlide" />
            <span className="series">SERIES</span>
          </div>

          <h3>{movie.name}</h3>
          <p className="overview">
            {" "}
            <span className="release">
              {movie.first_air_date?.split("-")[0]}
            </span>{" "}
            <br />
            {movie.overview}
          </p>
            <div className="slideBtns">
              <button className="play">
                <img src={playBtn} alt="playBtn" />
                Play
              </button>
              <button className="addList">+ Add List</button>
            </div>
        </div>
        <div className="pgRating">PG-13</div>
      </div>
    </div>
  );
}
export default Slide;
