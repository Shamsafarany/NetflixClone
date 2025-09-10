import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
function Home() {
  const movies = [
    { title: "Inception", year: 2010 },
    { title: "The Matrix", year: 1999 },
    { title: "Interstellar", year: 2014 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Forrest Gump", year: 1994 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 }
  ];
  return (
    <>
      <NavBar />
      <div className="cardContainer">
        {movies.map((movie, index) => {
          return <Card key={index} movie ={movie} />;
        })}
      </div>
    </>
  );
}
export default Home;
