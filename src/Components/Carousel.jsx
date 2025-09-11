import "../styles/carousel.css";
import Slide from "./Slide.jsx";
import { useState, useEffect } from "react";

function Carousel({ movies }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => { 
    const interval = setInterval(() =>{
      nextSlide();
    }, 5000);
    return () =>{
      clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="carouselCont">
      <button onClick={prevSlide} className="carouselBtn left">
        &#10094;
      </button>
      <div className="slidesWrapper">
        {movies.map((movie, index) => (
          <Slide key={index} movie={movie} active={index === currentIndex} />
        ))}
      </div>

      <button onClick={nextSlide} className="carouselBtn right">
        &#10095;
      </button>
    </div>
  );
}
export default Carousel;
