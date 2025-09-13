import "../Styles/Card.css";
import logo from "../assets/netflix_732228.png";
function Card({ movie }) {
  return (
    <>
      <div className="card">
        <img src={logo} alt="logo" className="logos" />
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name}
          className="poster"
        />
        <div className="info">
          <p className="title">
            {movie.name} <br />
            <span className="year">{movie.first_air_date?.split("-")[0]}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
