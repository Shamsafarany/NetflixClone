import Card from "./Card.jsx";
import "../styles/grid.css";
import { createContext } from "react";

export const TypeContext = createContext(null);

function Grid({ movies, type, genre = "default", className = "none" }) {
  const isSearching = className !== "none";
  return (
    <>
      <TypeContext.Provider value={type}>
        <div className="main">
          <h5 className={`subtitle ${isSearching ? `searchingTitle` : ``}`}>
            {className === "none"
              ? genre === "default"
                ? type === "series"
                  ? "Trending Series"
                  : "Trending Movies"
                : genre
              : "Search Results"}
          </h5>
          <div className={`cardContainer ${isSearching ? "hidden" : ``}`}>
            {movies.map((movie, index) => {
              return <Card key={index} movie={movie} />;
            })}
          </div>

          <div className={`searchResults ${!isSearching ? `hidden` : ``}`}>
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
