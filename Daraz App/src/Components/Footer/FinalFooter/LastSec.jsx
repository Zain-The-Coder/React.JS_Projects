import PakistanFlag from "../../../assets/Images/pakistan-flag.png";
import BangladeshFlag from "../../../assets/Images/bangladesh-flag.png";
import SrilankaFlag from "../../../assets/Images/srilanka-flag.png";
import NepalFlag from "../../../assets/Images/nepal-flag.png";
import MaymaarFlag from "../../../assets/Images/maymaar-flag.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import LastImage from "./LastImage";

function LastPart() {
  return (
    <>
      <section className="font-[poppins] bg-white px-6 md:px-[70px] py-[37px] flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        
        <section className="flex flex-col lg:flex-row w-full md:w-[70%] justify-between gap-8 md:gap-0">
          
          <div>
            <h3 className="font-light mb-3">Daraz International</h3>

            <ul className="flex flex-wrap text-[13px] text-[#9688a5] gap-[15px]">
              <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={PakistanFlag} alt="pakistan-image" /><span>Pakistan</span></li>
              <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={BangladeshFlag} alt="bangladesh-image" /><span>Bangladesh</span></li>
              <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={SrilankaFlag} alt="srilanka-image" /><span>Srilanka</span></li>
              <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={MaymaarFlag} alt="myanmar-image" /><span>Myanmar</span></li>
              <li className="flex items-center gap-[7px] cursor-pointer"><LastImage src={NepalFlag} alt="nepal-image" /><span>Nepal</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-light pb-[3%] mb-2">Follow Us</h3>
            <ul className="flex gap-[20px]">
              <li className="cursor-pointer hover:text-orange-500 transition-colors"><FacebookIcon /></li>
              <li className="cursor-pointer hover:text-orange-500 transition-colors"><XIcon /></li>
              <li className="cursor-pointer hover:text-orange-500 transition-colors"><InstagramIcon /></li>
              <li className="cursor-pointer hover:text-orange-500 transition-colors"><YouTubeIcon /></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-gray-100 md:border-none pt-4 md:pt-0">
          <p className="text-[#9688a5] md:text-black">© Daraz 2026</p>
        </section>
      </section>
    </>
  );
}

export default LastPart;