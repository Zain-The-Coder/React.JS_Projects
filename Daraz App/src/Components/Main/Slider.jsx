import { useEffect, useState } from "react";
import FirstImage from "../../assets/slider-images/hero-image-1.avif" ;
import SecondImage from "../../assets/slider-images/hero-image-2.avif" ;
import ThirdImage from "../../assets/slider-images/hero-image-3.avif" ;
import FourthImage from "../../assets/slider-images/hero-image-4.avif" ;
import FifthImage from "../../assets/slider-images/hero-image-5.avif" ;
import SixthImage from "../../assets/slider-images/hero-image-6.avif" ;
import SeventhImage from "../../assets/slider-images/hero-image-7.avif" ;



function Slider () {
    let [index , setIndex] = useState(0);
    const images = [FirstImage , SecondImage , ThirdImage , FourthImage , FifthImage , SixthImage , SeventhImage];
    useEffect(() => {

        const myInterval = setInterval(() => {
            setIndex(curruntIndex => (curruntIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(myInterval);
    } , [images.length])
    return (
        <>
        <img className="h-[350px] w-[80%]" src={images[index]} alt="slider-image" />
        </>
    )
}
export default Slider ;