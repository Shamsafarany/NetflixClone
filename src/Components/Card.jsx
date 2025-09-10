import "../Styles/Card.css";
import logo from "../assets/netflix_732228.png";
function Card({ movie }) {
  return (
    <>
      <div className="card">
        <img src={logo} alt="logo" className="logos"/>
        <img src="" alt="" />
        <div className="info">
          <p className="title">
            {movie.title} <br />
            <span className="year">{movie.year}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
