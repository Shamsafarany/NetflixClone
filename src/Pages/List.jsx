import Grid from "../Components/Grid";
import NavBar from "../Components/NavBar";
import { MovieContext, useMovieContext } from "../Context/MovieContext";
function List() {
  const {favorites}= useMovieContext(MovieContext);

  return (
    <>
      <NavBar type="default" />
      <div className="main">
        <Grid movies={favorites} type="favorites" favorites={favorites} />
      </div>
    </>
  );
}
export default List;
