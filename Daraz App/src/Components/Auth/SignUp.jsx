import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function SignUp () {
    return (
        <>
        <section className="absolute top-[100px] left-[450px] px-[40px] pb-[40px] bg-white rounded-[10px] z-40">
        <h2 className='text-center pt-[10px] font-[poppins]'>Sign up</h2>
        <div className='flex gap-[10px]'>
            <div className='p-[12px] border border-yellow text-[#121212] bg-white focus:outline-none focus:border-blue-500'><sub>pk</sub>+92</div>
            <input className="w-full font-[poppins] h-12 text-[12px] border-2 border-gray-300 rounded-md pl-3 text-[#121212] bg-white focus:outline-none focus:border-blue-500" type="number" name="number" placeholder="Please Enter Your Phone Number" />
        </div>
        <div className='flex mt-[10px] gap-[6px] items-center font-[poppins] text--[14px]'>
            <input className='h-[20px] w-[20px]' type="checkbox" />
            <p>By creating and/or using your account, you agree to our <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
        </div>
        <Button sx={{backgroundColor: '#f85606', color: '#fff',fontSize: '16px',padding: '10px', width:'100%' ,fontFamily:'poppins' ,
        borderRadius: '8px',  '&:hover': {backgroundColor: '#d94a05',},}}
        variant="contained" disableElevation><span><WhatsAppIcon /></span><span>Send Code Via Whatsapp</span></Button>
        <p>Already Have An Account ? <span>Log In Now</span></p>
                    <p className="text-center text-[#9a9fad] font-[poppins] text-[14px]">Or , Sign Up With</p>
                    <div className="flex justify-center gap-[10px] font-[poppins] text-[#9a9fad] text-[14px] mt-[20px]">
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-xl" />Google
                    </button>
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl ml-3" />Facebook
                    </button>
                    </div>
    </section>
        </>
    )
}

export default SignUp ;