export function Heading (props) {
    return (
        <>
        <h2 className="font-extrabold mt-[4px] text-[25px] border-b border-b-3 border-b-[#2c3e50] text-[#2c3e50] italic">{props.text}</h2>
        </>
    )
}

export function Paragraph (props) {
    return (
        <>
        <p className="pl-[10px] w-[90%] font-[poppins] pt-[5px] italic text-[14px] tracking-wide"><b className="text-[#2c3e50] text-[17px]">{props.bold}</b> <br /> 
        {props.unbold}</p>
        </>
    )
}

//Metropolis Education System | 2023 - 2025  |  90.3%  |  A+ Grade