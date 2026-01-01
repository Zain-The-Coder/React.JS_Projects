import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";


function Login () {
    return (
        <>
        <section>
            <div className="absolute p-[50px] border">
                <div className="flex justify-around">
                    <h2>Password</h2>
                    <h2>Phone Number</h2>
                </div>
                <div>
                    <input className="w-full font-poppins h-12 text-sm border-2 border-gray-300 rounded-md pl-3 text-[#121212] bg-white focus:outline-none focus:border-blue-500" type="email" name="email" placeholder="Please Enter Your Email" />
                    <input className="w-full font-poppins h-12 text-sm border-2 border-gray-300 rounded-md pl-3 text-[#121212] bg-white focus:outline-none focus:border-blue-500" type="password" name="password" placeholder="Please Enter Your Password" />
                    <p>Forgot Password ?</p>
                </div>
                <div>
                    <button>Log In</button>
                    <p>Don't Have An Account ? <span>Sign Up</span></p>
                </div>
                <div>
                    <p>Or , Login With</p>
                    <div>
                    <button>
                        <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-xl" />Google
                    </button>
                    <button>
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