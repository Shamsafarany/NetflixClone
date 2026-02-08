import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { useState, useEffect, use } from "react";
import { searchMovies } from "../Services/api";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  function handleInput(e) {
   const value = e.target.value;
   setSearchQuery(value);

   if (value === "") {
     setMovies([]);
     setIsSearch(false);
   }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    setIsSearch(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
    setSearchQuery("");
  }
  

  return (
    <>
      <NavBar type="default" />
      <div className="searchContainer">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInput}
            placeholder="Search for movies or shows..."
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
        {movies.length > 0 ? (
          <div className="main">
            <Grid movies={movies} type="movies" searching={isSearch} />
          </div>
        ) : (isSearch && <p className="noMatches">No matches found!</p>)}
      </div>
    </>
  );
}
export default Search;
