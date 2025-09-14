import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { getMovieGenres, getMoviesByGenres } from "../Services/api";
function Movies(){
    const [moviesByGenre, setMovies] = useState({});
    useEffect(() => {
        async function load(){
            const genres = await getMovieGenres();
            const data ={};

            for (const genre of genres) {
                const shows = await getMoviesByGenres(genre.id);
                data[genre.name] = shows;
            }
            setMovies(data);
        }
        load();
    }, []);
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