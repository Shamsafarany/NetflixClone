import NavBar from "../Components/NavBar";
import Grid from "../Components/Grid";
import Carousel from "../Components/Carousel";

import {
  searchMovies,
  getPopularSeries,
  getPopularMovies,
} from "../Services/api";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopularSeries() {
      try {
        const popularSeries = await getPopularSeries();
        setSeries(popularSeries);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadPopularSeries();
  }, []);
  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
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
      <NavBar />
      <Carousel movies={series} />
      <Grid movies={series} type="series" />
      <Grid movies={movies} type="movies" />
    </>
  );
}
export default Home;
