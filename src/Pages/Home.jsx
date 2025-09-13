import NavBar from "../Components/NavBar";
import Grid from "../Components/Grid";
import Carousel from "../Components/Carousel";
import Action from "../Components/Action";
import { searchMovies, getPopularMovies } from "../Services/api";
import { useEffect, useState } from "react";

function Home() {
  /*
  const movies = [
    { title: "Stranger Things", year: 2020 },
    { title: "The Matrix", year: 1999 },
    { title: "Interstellar", year: 2014 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Forrest Gump", year: 1994 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  ];
  */

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadPopularMovies = async () => {
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
      <Carousel movies={movies} />
      <Grid movies={movies} />
      <NavBar type="login" />
      <Action />
    </>
  );
}
export default Home;
