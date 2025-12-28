import Gemini from "../assets/Gemini_Generated_Image_wwkxt2wwkxt2wwkx.png" ;

function Header () {
    return (
        <>
        <header className="bg-[#2c3e50] flex justify-center gap-[100px] font-[poppins]">
            <section>
                <img className="h-[160px] w-[180px] rounded-[500px]" src={Gemini} alt="My-pic" />
            </section>
            <section className="text-white flex flex-col gap-[12px]">
                <div>
                <h1 className="italic text-[30px]">Zain Ur Rehman</h1>
                <p className="uppercase">Front End Developer</p>
                </div>
                <div>
                    <p><b>Phone : </b> 03182622266 | Whatsapp : 03182622266</p>
                    <p><b>Email : </b>zain015976@gmail.com</p>
                    <p><b>Location :</b> Karachi , Pakistan</p>
                </div>
            </section>
        </header>
        </>
    )
}
export default Header ;