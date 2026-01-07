import FinalFooter from "./FinalFooter/FinalFooter";
import FirstFooter from "./FirstFooter/FirstFooter";
import SecondFooter from "./SecondFooter/SecondFooter";

function Footer () {
    return (
        <>
        <footer className="bg-[#f4f4f6]">
        <button className="border text-[#1a9cb8] px-[12%] font-200 py-[8px] my-[50px] flex justify-center m-auto font-[poppins] border-[#1a9cb8]">Load More</button>
        <section>
        <FirstFooter />
        <SecondFooter />
        <FinalFooter />
        </section>
        </footer>
        </>
    )
}
export default Footer ;