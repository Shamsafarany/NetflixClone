import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { getTVGenres, getTVShowsByGenres } from "../Services/api";

function Shows() {
  const [showsByGenre, setShows] = useState({});
  useEffect(() => {
    async function load() {
      const genres = await getTVGenres();
      const data = {};

      for (const genre of genres) {
        const shows = await getTVShowsByGenres(genre.id);
        data[genre.name] = shows;
      }
      setShows(data);
    }
    load();
  }, []);
  return (
    <>
      <NavBar type="default" />
      {Object.entries(showsByGenre).map(([genreName, genreShows]) => (
        <Grid
          movies={genreShows} // array of shows
          type="series" // fixed type
          genre={genreName} // genre name
        />
      ))}
    </>
  );
}
export default Shows;
