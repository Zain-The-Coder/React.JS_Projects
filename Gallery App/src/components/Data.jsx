import axios from "axios";
import { useState } from "react";

const Data = () => {
    const [data , setData] = useState([]);

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=30');
        console.log(data)
        setData(response.data)
        console.log(response.data)
    }

    let printData = "No Data Available";

    if(data.length > 0) {
        printData = data.map((item , index) => (
            <section key={index}>
                <a href={item.url} target="_blank">
                <div className="h-40 w-44 bg-white">
                <img className="h-full w-full object-cover rounded-xl" src={item.download_url} alt="" />
                <h2 className="text-[16px] uppercase text-white">{item.author}</h2>
                </div>
                </a>
            </section>
        ))
    }


    return (
        <>
        <div className="bg-black h-screen overflow-auto p-4 text-white font-san-serif">
            <button onClick={getData}
             className="bg-white rounded text-black uppercase font-bold active:scale-95 cursor-pointer px-[10px] py-[3px]">
            Get Data</button>

            <div className="flex flex-wrap gap-7">
                {printData}
            </div>
        </div>
        </>
    )
}
export default Data ;