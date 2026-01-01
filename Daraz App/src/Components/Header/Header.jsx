import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <>
        <section className="flex flex-col gap-[1px]">
        <NavBar />
        <SearchBar />
        </section>
        </>
    )
}

export default Header ;