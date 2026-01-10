import firstLogo from "../../../assets/Images/first-logo.png" ;
import SecondLogo from "../../../assets/Images/second-logo.png" ;
import ThirdLogo from "../../../assets/Images/third-logo.png" ;
import Daraz from "../../../assets/Images/Daraz.png" ;

function Section() {
  return (
    <section className="flex flex-col sm:flex-row gap-[20px] mt-8 md:mt-0"> 
      <div className="flex h-auto gap-[12px] font-[poppins] items-center">
        <div>
          <img className="h-[45px] w-[45px]" src={Daraz} alt="daraz-logo" />
        </div>
        <div>
          <h3 className="text-[#f36f5a] text-[15px] font-bold">Happy Shopping</h3>
          <p className="text-[14px]">Download App</p>
        </div>
      </div>
      
      <div className="flex gap-[10px] items-center">
        <div className="flex flex-col gap-[8px]">
          <img className="w-[100px]" src={firstLogo} alt="app-store" />
          <img className="w-[100px]" src={SecondLogo} alt="google-play" />
        </div>
        <div>
          <img className="w-[100px]" src={ThirdLogo} alt="app-gallery" />
        </div>
      </div>
    </section>
  );
}

export default Section ;