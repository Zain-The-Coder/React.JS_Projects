// import Login from "../Auth/Login";
// import SignUp from "../Auth/SignUp";


const NavBar = () => {
    return (
        <>
        <nav>
            <ul className="flex gap-[30px] text-[12px] w-[80%] justify-end m-auto text-white font-[600]">
                <li className="cursor-pointer">SAVE MORE ON APP</li>
                <li className="cursor-pointer">SELL ON DARAZ</li>
                <li className="cursor-pointer">HELP & SUPPORT</li>
                <li className="cursor-pointer">LOGIN</li>
                <li className="cursor-pointer">SIGN UP</li>
                <li className="cursor-pointer">زبان تبدیل کریں</li>
            </ul>
        </nav>
        {/* <Login />
        <SignUp /> */}
        </>
    )
}

export default NavBar ; 