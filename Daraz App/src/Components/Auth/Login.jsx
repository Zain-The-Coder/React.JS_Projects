import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import SignUp from "./SignUp";

function Login({ onClose, setShowLogin, setShowSignup }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <section className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] text-black p-[25px] sm:p-[40px] bg-white rounded-[10px] z-40">
          <ClearIcon onClick={onClose} sx={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer" }}/>

          <div className="flex justify-center font-[poppins] mb-[20px]">
            <h2 className="text-[#9a9fad] hover:text-black border-r pr-[20px] sm:pr-[30px] cursor-pointer">Password</h2>
            <h2 className="text-[#9a9fad] pl-[20px] sm:pl-[30px] cursor-pointer">Phone Number</h2>
          </div>

          <div>
            <input className="w-full my-[15px] font-[poppins] h-12 text-[12px] border-2 border-gray-300 rounded-md pl-3 text-[#121212] focus:outline-none focus:border-blue-500"  type="email" placeholder="Please Enter Your Email"/>
            <input className="w-full font-[poppins] h-12 text-[12px] border-2 border-gray-300 rounded-md pl-3 text-[#121212] focus:outline-none focus:border-blue-500" type="password" placeholder="Please Enter Your Password" />
            <p className="text-[#9a9fad] mt-[10px] mb-[20px] font-[poppins] text-[11px] text-right cursor-pointer"> Forgot Password ? </p>
          </div>

          <Button variant="contained" disableElevation
            sx={{ backgroundColor: "#f85606", color: "#fff", fontSize: { xs: "14px", sm: "16px" }, padding: "10px", width: "100%", fontFamily: "poppins", borderRadius: "8px", "&:hover": { backgroundColor: "#d94a05" },}}> Login
          </Button>

          <p className="text-center font-[poppins] text-[13px] sm:text-[14px] text-[#9a9fad] my-[10px]"> Don't Have An Account? <span onClick={() => { setIsLogin(false); setShowLogin(false); setShowSignup(true); }}
              className="text-blue-500 cursor-pointer">{" "} Sign Up </span>
          </p>

          <p className="text-center text-[#9a9fad] font-[poppins] text-[14px] mt-[25px]">Or, Login With</p>

          <div className="flex flex-col sm:flex-row justify-center gap-[15px] font-[poppins] text-[#9a9fad] text-[14px] mt-[20px]">
            <button className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-xl" />Google
            </button>

            <button className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl" />Facebook
            </button>
          </div>
        </section>
      ) : (
        <SignUp onClose={onClose} setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      )}
    </>
  );
}

export default Login;


