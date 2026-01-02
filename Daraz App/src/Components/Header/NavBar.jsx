// import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";


const NavBar = () => {
    return (
        <>
        <nav>
            <ul className="flex gap-[30px] text-[12px] w-[80%] justify-end m-auto text-white font-[600]">
                <li>SAVE MORE ON APP</li>
                <li>SELL ON DARAZ</li>
                <li>HELP & SUPPORT</li>
                <li>LOGIN</li>
                <li>SIGN UP</li>
                <li>CHANGE LANGUAGE</li>
            </ul>
        </nav>
        {/* <Login /> */}
        <SignUp />
        </>
    )
}

export default NavBar ; 
