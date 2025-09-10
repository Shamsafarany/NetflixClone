import "../styles/carousel.css";
import Slide from "./Slide.jsx";

function Carousel({ movies }) {
  return (
    <div className="carouselCont">
      {movies.map((movie, index) => {
        return <Slide key={index} movie={movie} />;
      })}
    </div>
  );
}
export default Carousel;
