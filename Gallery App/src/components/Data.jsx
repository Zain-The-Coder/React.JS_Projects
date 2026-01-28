import axios from "axios";
import { useEffect, useState } from "react";

const Data = () => {
    const [data , setData] = useState([]);
    const [iterate , setIterate] = useState(1);

    const getData = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${iterate}&limit=20`);
        console.log(data)
        setData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getData()
    } , [iterate])

    let printData =  <h3 className="text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        Data Is Loading....</h3>;

    if(data.length > 0) {
        printData = data.map((item , index) => (
            <section key={index}>
                <a href={item.url} target="_blank">
                <div className="h-40 w-44 bg-white">
                <img className="h-full w-full object-cover rounded" src={item.download_url} alt="" />
                <h2 className="text-[16px] uppercase text-white">{item.author}</h2>
                </div>
                </a>
            </section>
        ))
    }


    return (
        <>
        <div className="bg-black h-screen overflow-auto p-4 text-white font-san-serif">
            <div className="flex flex-wrap gap-7">
                {printData}
            </div>
            <div className="flex justify-center gap-6 items-center">
                <button className="bg-amber-400 font-bold text-black active:scale-90 text-sm rounded px-4 py-2 cursor-pointer"
                onClick={() => {
                    if(iterate > 1) {setIterate(iterate -1) ; setData([])}
                }}>Prev</button>
                <h4>Page {iterate}</h4>
                <button className="bg-amber-400 font-bold text-black active:scale-90 text-sm rounded px-4 py-2 cursor-pointer"
                onClick={() => {
                {setIterate(iterate + 1) ; setData([])}
                }}>Next</button>
            </div>
        </div>
        </>
    )
}
export default Data ;