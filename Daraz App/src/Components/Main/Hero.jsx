import heroImg from "../../assets/slider-images/hero-image-1.avif";
import AsideBox from "./AsideBox";
import LiveImg from "../../assets/Images/live-image.webp" ;
import Slider from "./Slider";

const Hero = () => {
    return (
        <>
<section className="flex w-[90%] justify-center m-auto flex-col lg:flex-row">
    <Slider />
    <AsideBox />
</section>

        <section>
            <img className="sm:mt-[-40px] md:mt-[-36px] lg:mt-[30px] m-auto sm:w-[80%]" src={LiveImg} alt="live-image" />
        </section>
        </>
    )
}
export default Hero ;