import Card from "./Card.jsx";
import '../styles/grid.css';
function Grid({movies, type}) {
  return (
    <>
      <div className="main">
        <h5 className="subtitle">{type === "series" ? "Trending Series" : "Trending Movies"}</h5>
        <div className="cardContainer">
          {movies.map((movie, index) => {
            return <Card key={index} movie={movie} type={type} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Grid;
