import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClearIcon from "@mui/icons-material/Clear";

function SignUp({ setShowLogin, setShowSignup, onClose }) {
  return (
    <section className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] pb-[40px] bg-white rounded-[10px] z-40">
      <ClearIcon
        onClick={onClose} // modal close
        className='text-black'
        sx={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer" }}
      />

      <h2 className="text-center pt-[20px] pb-[40px] font-[poppins]">Sign up</h2>

      <div className="px-[20px]">
        <div className="flex flex-col sm:flex-row gap-[10px]">
          <div className="p-[12px] border rounded-md border-[#9095a5] text-[#121212] bg-white"><sub>pk</sub>+92</div>
          <input
            className="w-full font-[poppins] h-12 text-[12px] border-2 border-[#e6e7eb] rounded-md pl-3 text-[#a5a9b6] bg-white focus:outline-none focus:border-blue-500"
            type="number"
            placeholder="Please Enter Your Phone Number"
          />
        </div>

        <div className="flex items-start gap-[6px] font-[poppins] text-[13px] mt-[15px] mb-[20px]">
          <input className="mt-[3px]" type="checkbox" />
          <p className="text-[#a5a9b6]">
            By creating and/or using your account, you agree to our
            <span className="text-blue-500"> Terms of Use </span>and
            <span className="text-blue-500"> Privacy Policy</span>.
          </p>
        </div>

        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#f85606",
            color: "#fff",
            width: "100%",
            fontFamily: "poppins",
            borderRadius: "8px",
            fontSize: { xs: "14px", sm: "16px" },
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            gap: { xs: "10px", sm: "40px" },
            "&:hover": { backgroundColor: "#d94a05" },
          }}
        >
          <WhatsAppIcon /> Send Code Via Whatsapp
        </Button>

        <p className="text-[#9095a5] font-[poppins] text-[13px] text-center py-[10px]">
          Already Have An Account ?
          <span
            onClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
            className="text-blue-500 cursor-pointer"
          >
            {" "} Log In Now
          </span>
        </p>

        <p className="text-center text-[#9a9fad] font-[poppins] text-[14px] mt-[50px]">Or, Sign Up With</p>

        <div className="flex flex-col sm:flex-row justify-center gap-[15px] font-[poppins] text-[#9a9fad] text-[14px] mt-[20px]">
          <button className="flex items-center justify-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-xl" />Google
          </button>

          <button className="flex items-center justify-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl" />Facebook
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
