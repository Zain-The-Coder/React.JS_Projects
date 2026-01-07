import Hero from "./Hero";
import Products from "../Products/Products";
import LeftLinks from "./LeftLinks";

const Main = () => {
    return (
        <>
        <main className="relative min-h-[200vh]">
            <LeftLinks />
            <Hero />
            <Products />

        </main>
        </>
    )
}

export default Main;