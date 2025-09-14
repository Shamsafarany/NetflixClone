import Card from "./Card.jsx";
import "../styles/grid.css";
import { createContext } from "react";

export const TypeContext = createContext(null);

function Grid({ movies, type, genre = "default" }) {
  return (
    <>
      <TypeContext.Provider value={type}>
        <div className="main">
          <h5 className="subtitle">
            {genre === "default"
              ? (type === "series"
                ? "Trending Series"
                : "Trending Movies")
              :  (genre) }
          </h5>
          <div className="cardContainer">
            {movies.map((movie, index) => {
              return <Card key={index} movie={movie} />;
            })}
          </div>
        </div>
      </TypeContext.Provider>
    </>
  );
}
export default Grid;
