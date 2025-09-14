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
  useEffect(() => {
    async function loadPopularSeries() {
      try {
        const popularSeries = await getPopularSeries();
        setSeries(popularSeries);
      } catch (e) {
        console.log(e);
      }
    };
    loadPopularSeries();
  }, []);
  useEffect(() => {
    async function loadPopularMovies(){
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (e) {
        console.log(e);
      }
    };
    loadPopularMovies();
  }, []);
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
