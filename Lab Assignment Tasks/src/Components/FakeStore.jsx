import { useEffect, useState } from "react";

function FakeStore () {
    const [products , setProducts] = useState([]);
    const [load , setLoad] = useState(true);
    const [error , setError] = useState("");
    useEffect(() => {
        try {
        async function DataFetcher (){
            const dataFromDB = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
            const filterData = await dataFromDB.json();
            setLoad(false);
            setProducts(filterData);
        }
        DataFetcher();
    } catch (e) {
        setError(e.message);
    }
    } , [])

    return (
<>
  {load && ( <p className="text-center text-gray-500 my-2">Loading......</p>)}

  <h1 className="px-4 py-3 text-lg font-semibold border-b border-gray-200">Fake Store Products</h1>

  <div className="flex flex-col divide-y divide-gray-200">
    {products.map((item, index) => (
      <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4 py-3 bg-white">
        <img src={item.image} alt={item.title} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"/>

        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-medium text-sm sm:text-base truncate"> {(item.title).slice(10)}</h3>
          <p className="text-gray-500 text-xs sm:text-sm truncate max-w-[200px]"> {item.description}</p>
        </div>

        <p className="text-green-500 font-medium text-xs sm:text-sm whitespace-nowrap"> ${item.price}</p>
      </div>
    ))}
  </div>
</>
    )
}
export default FakeStore ;