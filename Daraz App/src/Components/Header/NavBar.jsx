import { useState } from "react";
import Login from "../Auth/Login";
// import SignUp from "../Auth/SignUp";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#f85606] text-white">
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-[30px] text-[12px] w-[80%] justify-end m-auto font-[600] py-2">
                    <li className="cursor-pointer">SAVE MORE ON APP</li>
                    <li className="cursor-pointer">SELL ON DARAZ</li>
                    <li className="cursor-pointer">HELP & SUPPORT</li>
                    <li className="cursor-pointer">LOGIN</li>
                    <li className="cursor-pointer">SIGN UP</li>
                    <li className="cursor-pointer">زبان تبدیل کریں</li>
                </ul>

                <div className="md:hidden absolute flex justify-start px-4 py-2">
                    <button onClick={() => setOpen(!open)} className="text-xl font-bold">☰</button>
                </div>

                {open && (
                    <ul className="md:hidden font-[poppins] bg-white text-orange-500 absolute top-[40px] shadow-2xl flex flex-col gap-3 text-[12px] font-[600] p-[10px] rounded-4xl cursor-pointer z-100">
                        <li>SAVE MORE ON APP</li>
                        <li>SELL ON DARAZ</li>
                        <li>HELP & SUPPORT</li>
                        <li>LOGIN</li>
                        <li>SIGN UP</li>
                        <li>زبان تبدیل کریں</li>
                    </ul>
                )}
            </nav>
            <div>{Login}</div>
        </>
    );
};

export default NavBar;
