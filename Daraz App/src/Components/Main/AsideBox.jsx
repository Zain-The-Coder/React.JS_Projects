import Daraz_Logo from "../../assets/Images/Daraz-logo.avif";
import Bus from "../../assets/Images/Bus-Pic.avif" ;
import Voucher from "../../assets/Images/Voucher-pic.avif" ;
import QR from "../../assets/Images/QR-code.avif" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";


const AsideBox = () => {
    return (
        <>
<aside className="hidden lg:block bg-gradient-to-r w-[17%] from-white to-[#ffeadd] rounded-r-xl">
            <header className="flex justify-items-start gap-[40px] items-center pl-[2px] pr-[10px] pt-[4px]">
                <img className="w-[27px] h-[45px] pl-[3px] pb-[4px]" src={Daraz_Logo} alt="daraz-logo" />
                <h2 className="uppercase text-[14px] font-[poppins] text-[#682312]">Try Daraz App</h2>
            </header>
            <main className="font-[poppins] bg-gradient-to-b border-4 pt-[5px] border-orange-500 border-double from-orange-400 to-pink-400 text-white">
                <p className="text-[10px]">★ 4.8 rated</p>
               <section className="flex flex-col justify-center items-center">
                    <h2 className="text-[11px]">Download The App Now</h2>
                    <div className="flex gap-[10px] items-center  w-[60%] pt-[20px]">
                        <img className="h-[40px] w-[40px]" src={Bus} alt="bus-picture" />
                        <p className="text-[13px]">Free Shipping</p>
                    </div>
                    <div className="flex gap-[10px] items-center py-[10px] w-[60%]">
                        <img className="h-[40px] w-[40px]" src={Voucher} alt="voucher" />
                        <p className="text-[13px]">Exclusive Vouchers</p>
                    </div>
               </section>
            </main>
                        <div className="flex items-center gap-[3px] gap-[2px] m-auto p-[5px]">
                            <div>
                            <img src={QR} alt="qr-code" />
                            </div>
                            <div>
                        <button className="border text-[10px] p-[3px] mb-[6px] rounded-[6px] font-[poppins]">
                        <FontAwesomeIcon icon={faApple} />App Store
                        </button>
                        <button className="border text-[10px] p-[3px] rounded-[6px] font-[poppins]">
                        <FontAwesomeIcon icon={faGooglePlay} />Play Store
                        </button>
                            </div>
                        </div>
                        <p className="text-[9px] ml-[10px] mt-[6px] font-[poppins]">Download The App Now !</p>

        </aside>
        </>
    )
}

export default AsideBox ;