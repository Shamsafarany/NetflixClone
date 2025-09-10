import "../Styles/Card.css";
function Card({ movie }) {
  return (
    <>
      <div className="card">
        <img src="" alt="" />
        <div className="info">
          <p className="title">{movie.title}</p>
          <p className="year">{movie.year}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
