// import axios from "axios"
// import { useEffect, useState } from "react";

// const Axios = () => {

//     const [items , setItems] = useState([]);
//     const [error , setError] = useState("");
//     const [disabled , setDisabled] = useState(true);

//     useEffect(() => {

//         const dataTaker = async () => {
//             const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=30');
//             console.log(response.data)
//             setItems(response.data);
//         }
//         dataTaker();
        
//         if(items.length < 0) {
//             setError("Make Sure That Your Internet Is Properly Working....");
//             setDisabled(false);
//         } else {
//             setError("");
//             setDisabled(true);
//         }
//     } , [])

//     return (
//         <>
//         <h1>Hello From Axios.jsx</h1>
//         <p>{error}</p>
//         {disabled && (items.map((element , index) => (
//             <div className="flex flex-wrap gap-4" key={index}>
//                 <img src={element.download_url} alt="myImage" />
//             </div>
//         ))
//         )}
//         </>
//     )
// }
// export default Axios;