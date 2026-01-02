import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';



function Login () {
    return (
        <>
        <section className="absolute top-[100px] left-[450px] p-[40px] bg-white rounded-[10px] z-40">
            <div>
            <ClearIcon sx={{position: 'fixed' , top: '10px' , right:'2px'}}/>
                <div className="flex justify-center  font-[poppins]">
                    <h2 className="text-[#9a9fad] border-r pr-[30px] cursor-pointer">Password</h2>
                    <h2 className="text-[#9a9fad] pl-[30px] cursor-pointer">Phone Number</h2>
                </div>
                <div>
                    <input className="w-full my-[20px] font-[poppins] h-12 text-[12px] border-2 border-gray-300 rounded-md pl-3 text-[#121212] bg-white focus:outline-none focus:border-blue-500" type="email" name="email" placeholder="Please Enter Your Email" />
                    <input className="w-full font-[poppins] h-12 text-[12px] border-2 border-gray-300 rounded-md pl-3 text-[#121212] bg-white focus:outline-none focus:border-blue-500" type="password" name="password" placeholder="Please Enter Your Password" />
                    <p className="text-[#9a9fad] my-[15px] font-[poppins] text-[10px] pl-[72%] cursor-pointer">Forgot Password ?</p>
                </div>
                <div>
                    <Button sx={{backgroundColor: '#f85606', color: '#fff',fontSize: '16px',padding: '10px', width:'100%' ,fontFamily:'poppins' ,
                                borderRadius: '8px',  '&:hover': {backgroundColor: '#d94a05',},}}
                                 variant="contained" disableElevation>Login</Button>
                    <p className="text-center font-[poppins] text-[14px] text-[#9a9fad] my-[8px]">Don't Have An Account ? <span className="text-[#00f] cursor-pointer">Sign Up</span></p>
                </div>
                <div>
                    <p className="text-center text-[#9a9fad] font-[poppins] text-[14px]">Or , Login With</p>
                    <div className="flex justify-center gap-[10px] font-[poppins] text-[#9a9fad] text-[14px] mt-[20px]">
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-xl" />Google
                    </button>
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl ml-3" />Facebook
                    </button>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}
export default Login ;