import PakistanFlag from "../../../assets/Images/pakistan-flag.png" ;
import BangladeshFlag from "../../../assets/Images/bangladesh-flag.png" ;
import SrilankaFlag from "../../../assets/Images/srilanka-flag.png" ;
import NepalFlag from "../../../assets/Images/nepal-flag.png" ;
import MaymaarFlag from "../../../assets/Images/maymaar-flag.png" ;
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import LastImage from "./LastImage";

function LastPart () {
    return (
        <>
        <section className="font-[poppins] bg-white px-[70px] py-[37px] flex justify-between">
            <section className="flex w-[70%] justify-between">
                <div>
                    <h3 className="font-light">Daraz International</h3>
                    <ul  className="flex text-[13px] text-[#9688a5] gap-[15px]">
                        <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={PakistanFlag} alt="pakistan-image" /><span>Pakistan</span></li>
                        <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={BangladeshFlag} alt="pakistan-image" /><span>Bangladesh</span></li>
                        <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={SrilankaFlag} alt="pakistan-image" /><span>Srilanka</span></li>
                        <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={MaymaarFlag} alt="pakistan-image" /><span>Myanmar</span></li>
                        <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={NepalFlag} alt="pakistan-image" /><span>Nepal</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-light pb-[3%]">Follow Us</h3>
                    <ul className="flex gap-[20px]">
                        <li className="cursor-pointer"><FacebookIcon /></li>
                        <li className="cursor-pointer"><XIcon /></li>
                        <li className="cursor-pointer"><InstagramIcon /></li>
                        <li className="cursor-pointer"><YouTubeIcon /></li>
                    </ul>
                </div>
            </section>
            <section>
                <p>© Daraz 2026</p>
            </section>
        </section>
        
        </>
    )
}

export default LastPart;