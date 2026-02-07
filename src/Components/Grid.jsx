import Card from "./Card.jsx";
import "../styles/grid.css";
import { createContext } from "react";

export const TypeContext = createContext(null);

function Grid({
  movies,
  type,
  genre = "default",
  className = "none",
  favorites,
  onAddFavorite,
  searching = false
}) {
  const isSearching = className !== "none";
  function getSubtitleText(className, genre, type) {
    if(searching) {
      return "Search Results";
    }
    if (className !== "none") {
      return "Search Results";
    }

    if (genre !== "default") {
      return genre;
    }

    if (type === "series") {
      return "Trending Series";
    } else if (type === "movies") {
      return "Trending Movies";
    } else {
      return "Favorites";
    }
  }
  return (
    <>
      <TypeContext.Provider value={type}>
        <div className="main">
          <h5 className={`subtitle ${isSearching ? `searchingTitle` : ``}`}>
            {getSubtitleText(className, genre, type)}
          </h5>
          <div className={`cardContainer ${isSearching ? "hidden" : ``}`}>
            {movies.length === 0 ? (
              <div className="noFavorites">No favorites added</div>
            ) : (
              movies.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    movie={movie}
                    onAddFavorite={onAddFavorite}
                  />
                );
              })
            )}
          </div>

          <div className={`searchResults ${!isSearching ? `hidden` : ``}`}>
            {movies.map((movie, index) => {
              return (
                <Card key={index} movie={movie} />
              );
            })}
          </div>
        </div>
      </TypeContext.Provider>
    </>
  );
}
export default Grid;
