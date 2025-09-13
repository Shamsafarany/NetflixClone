import "../Styles/Card.css";
import logo from "../assets/netflix_732228.png";
function Card({ movie, type }) {

  const title = (type === "series") ? movie.name : movie.title;
  const year =
    type === "series"
      ? movie.first_air_date?.split("-")[0]
      : movie.release_date?.split("-")[0];
  return (
    <>
      <div className="card">
        <img src={logo} alt="logo" className="logos" />
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={title}
          className="poster"
        />
        <div className="info">
          <p className="title">
            {title} <br />
            <span className="year">{year}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
