import { useEffect, useState } from "react";
import FirstImage from "../../assets/slider-images/hero-image-1.avif";
import SecondImage from "../../assets/slider-images/hero-image-2.avif";
import ThirdImage from "../../assets/slider-images/hero-image-3.avif";
import FourthImage from "../../assets/slider-images/hero-image-4.avif";
import FifthImage from "../../assets/slider-images/hero-image-5.avif";
import SixthImage from "../../assets/slider-images/hero-image-6.avif";
import SeventhImage from "../../assets/slider-images/hero-image-7.avif";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Slider() {
  const images = [ FirstImage, SecondImage, ThirdImage, FourthImage, FifthImage, SixthImage, SeventhImage,];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
  <div className=" relative overflow-hidden w-full lg:w-[83%] h-[200px] sm:h-[300px] md:h-[350px] mx-auto">


      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`slider-${i}`} className="w-full h-full flex-shrink-0 object-cover"/>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute cursor-pointer sm:top-[100px] left-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white">
        <ChevronLeftIcon fontSize="large" />
      </button>

      <button onClick={nextSlide} className="absolute cursor-pointer sm:top-[100px] right-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white">
        <ChevronRightIcon fontSize="large" />
      </button>
    </div>
  );
}

export default Slider;
