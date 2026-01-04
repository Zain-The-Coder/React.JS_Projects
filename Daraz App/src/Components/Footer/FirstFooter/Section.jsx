import firstLogo from "../../../assets/Images/first-logo.png" ;
import SecondLogo from "../../../assets/Images/second-logo.png" ;
import ThirdLogo from "../../../assets/Images/third-logo.png" ;
import Daraz from "../../../assets/Images/Daraz.png" ;


function Section () {
    return (
        <>
        <section className="flex gap-[20px]">
            <div className="flex h-[10vh] gap-[7px] font-[poppins] items-center">
                <div>
                    <img className="h-[50px] w-[50px]" src={Daraz} alt="daraz-logo" />
                </div>
                <div>
                <h3 className="text-[#f36f5a] text-[15px]">Happy Shopping</h3>
                <p className="text-[14px]">Download App</p>
                </div>
            </div>
            <div className="flex gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                    <img src={firstLogo} alt="first-logo" />
                    <img src={SecondLogo} alt="second-logo" />
                </div>
                <div>
                    <img src={ThirdLogo} alt="third-logo" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Section ;