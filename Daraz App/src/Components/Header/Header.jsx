import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Login from "../Auth/Login";
import { useState } from "react";

const Header = () => {

    const [show , setShow] = useState(false);
    return (
        <>
        <section className="flex flex-col md:gap-[1px]">
        <NavBar />
        <SearchBar />
        </section>
        </>
    )
}

export default Header ;