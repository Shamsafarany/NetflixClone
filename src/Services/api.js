const API_KEY = "a4dc68a2d03250797e1ee3eced7d39d7";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularSeries() {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}
export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
}

export async function getTVGenres() {
  const response = await fetch(
    `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.genres;
}

export async function getTVShowsByGenres(genreId){
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&sort_by=popularity.desc`
  );
  const data = await response.json();
  return data.results.slice(0, 10);
}
