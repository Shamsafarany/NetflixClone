import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { useState, useEffect, use } from "react";
function List() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favoriteList = localStorage.getItem("favorites");
    if (favoriteList) {
      setFavorites(JSON.parse(favoriteList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleAddFavorites(movie) {
    setFavorites([...favorites, movie]);
  }
  return (
    <>
      <NavBar type="default" />
      <Grid
        movies={favorites}
        type="favorites"
        favorites={favorites}
        onAddFavorite={handleAddFavorites}
      />
    </>
  );
}
export default List;
