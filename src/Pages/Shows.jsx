import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { useState, useEffect, use } from "react";
import { getTVGenres, getTVShowsByGenres } from "../Services/api";

function Shows() {
  const [showsByGenre, setShows] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const genres = await getTVGenres();
        const data = {};
        for (const genre of genres) {
          const shows = await getTVShowsByGenres(genre.id);
          data[genre.name] = shows;
        }
        setShows(data);
      } catch (e) {
        console.log(e);
        setError(e);
      }finally{
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
      {Object.entries(showsByGenre).map(([genreName, genreShows]) => (
        <Grid
          movies={genreShows} 
          type="series" 
          genre={genreName} 
        />
      ))}
    </>
  );
}
export default Shows;
