import { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  //store and load to localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
    console.log(localStorage.getItem("favorites"));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
     console.log("saved favorites", favorites);
  }, [favorites]);

  //add Favorites
  function addFavorite(movie) {
    setFavorites((prev) => [...prev, movie]);
  }
  function removeFavorite(movieId) {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }
  function isFavorite(movieId) {
    return favorites.some((movie) => movie.id === movieId);
  }

  return (
    <MovieContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
};