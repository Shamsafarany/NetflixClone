import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { getMovieGenres, getMoviesByGenres } from "../Services/api";
function Movies() {
  const [moviesByGenre, setMovies] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      try {
        const genres = await getMovieGenres();
        const data = {};

        for (const genre of genres) {
          const shows = await getMoviesByGenres(genre.id);
          data[genre.name] = shows;
        }
        setMovies(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error loading content: {error.message}</p>;
  }
  return (
    <>
      <NavBar type="default" />
      {Object.entries(moviesByGenre).map(([genreName, genreShows]) => (
        <Grid
          movies={genreShows} // array of shows
          type="movies" // fixed type
          genre={genreName} // genre name
        />
      ))}
    </>
  );
}
export default Movies;
