import Image from "./Image";
import EasyPaisa from "../../../assets/Accounts/easypaisa.png" ;
import Myboad from "../../../assets/Accounts/mastercard-pic.png" ;
import DarazWallet from "../../../assets/Accounts/daraz-wallet.png" ;
import MyImage from "../../../assets/Accounts/first-pic.png" ;
import JazzCash from "../../../assets/Accounts/jazzcash.png" ;
import UnionPay from "../../../assets/Accounts/unionpay.png" ;
import MonthlyInstallment from "../../../assets/Accounts/Installments.png" ;
import HBL from "../../../assets/Accounts/hbl.png" ;
import MyLastImage from "../../../assets/Accounts/second-image.png" ;


function FirstPart () {
    return (
        <>
        <section className="bg-white">
        <section className="flex font-[poppins] bg-white mt-[3%] w-[60%] justify-around p-[20px] items-center">
            <div>
            <h3>Payment Methods</h3>
            <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[5px]">
                <Image src={EasyPaisa} />
                <Image src={Myboad} />
                <Image src={DarazWallet} />
                <Image src={MyImage} />
                <Image src={JazzCash} />
                <Image src={UnionPay} />
                </div>
                <div className="flex gap-[5px]">
                <Image src={MonthlyInstallment} />
                <Image src={HBL} />
                </div>
            </div>
            </div>
            <div>
            <div>
                <h3 className="mb-[20px]">Verified By</h3>
                <Image src={MyLastImage} />
            </div>
            </div>
        </section>
        </section>
        </>
    )
}
export default FirstPart;