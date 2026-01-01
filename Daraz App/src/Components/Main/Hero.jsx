import heroImg from "../../assets/slider-images/hero-image-1.avif";
import AsideBox from "./AsideBox";
import LiveImg from "../../assets/Images/live-image.webp" ;
import Slider from "./Slider";

const Hero = () => {
    return (
        <>
        <section className="flex w-[90%] justify-center m-auto">
        <Slider />
        <AsideBox />
        </section>
        <section>
            <img className="mt-[30px] m-auto" src={LiveImg} alt="live-image" />
        </section>
        </>
    )
}
export default Hero ;