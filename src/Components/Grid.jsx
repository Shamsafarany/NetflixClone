import Card from "./Card.jsx";
import '../styles/grid.css';
function Grid({movies}) {
  return (
    <>
      <div className="main">
        <h5 className="subtitle">Trending Movies</h5>
        <div className="cardContainer">
          {movies.map((movie, index) => {
            return <Card key={index} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Grid;
