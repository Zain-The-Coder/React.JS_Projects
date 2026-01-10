import heroImg from "../../assets/slider-images/hero-image-1.avif";
import AsideBox from "./AsideBox";
import LiveImg from "../../assets/Images/live-image-1.webp" ;
import Slider from "./Slider";
import Login from "../Auth/Login";
import { useState } from "react";



const Hero = () => {

    return (
        <>
<section className="flex w-[90%] h-[20vh] sm:h-full justify-center m-auto flex-col lg:flex-row">
    <Slider />
    <AsideBox />
</section>

        <section>
            <img className="mt-[10px] sm:mt-[-40px] md:mt-[-36px] lg:mt-[30px] m-auto w-[80%]" src={LiveImg} alt="live-image" />
        </section>
        </>
    )
}
export default Hero ;
