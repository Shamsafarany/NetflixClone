import "../Styles/Card.css";
import logo from "../assets/netflix_732228.png";
import { useContext, useState } from "react";
import { TypeContext } from "./Grid";
import { MovieContext, useMovieContext } from "../Context/MovieContext";

function Card({ movie }) {
  const type = useContext(TypeContext);
  let title = type === "series" ? movie.name : movie.title;
  let year =
    type === "series"
      ? movie.first_air_date?.split("-")[0]
      : movie.release_date?.split("-")[0];

  if(type === "favorites") {
    title = movie.name ? movie.name : movie.title;
    year = movie.first_air_date
      ? movie.first_air_date.split("-")[0]
      : movie.release_date
      ? movie.release_date.split("-")[0]
      : "N/A";
  }

  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function handleAddFave() {
    favorite ? removeFavorite(movie.id) : addFavorite(movie);
  }
  return (
    <>
      <div className="card">
        <img src={logo} alt="logo" className="logos" />
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={title}
          className="poster"
        />
        <div className="info">
          <p className="title">
            {title} <br />
            <span className="year">{year}</span>
          </p>
          {favorite ? (
            <button className="add-btn" onClick={handleAddFave}>
              -
            </button>
          ) : (
            <button className="add-btn" onClick={handleAddFave}>
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Card;
