import { use, useEffect, useState } from "react";
import Loader from "./Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [error , setError] = useState("");
  const [show , setShow] = useState(true);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    async function dataFetcher() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setShow(false);
        setProducts(data);
        setLoading(false)
      } catch (e) {
        console.log(e);
        setLoading(false)
        setError(e.message);
      }
    }
    dataFetcher();
  }, []);

  return (
    <>
    <div className="bg-gray-100 min-h-screen font-[poppins]">
    <h1 className="text-[#424242] text-[25px] ml-[3%] mb-[-20px] sm:mt-[30px] sm:mb-[10px]">Our Products</h1>
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      

      {show && <p className="text-red-600 font-extrabold text-[20px] text-center">{error}</p> }
      {loading && <Loader />}
        {products.map((product) => {
          const stars = Math.round(product.rating.rate);

          return (
            <div key={product.id} className="bg-white rounded-md shadow hover:shadow-lg transition cursor-pointer">
              <div className="h-[160px] flex items-center justify-center p-3">
                <img src={product.image} alt={product.title} className="h-full object-contain"/>
              </div>

              <div className="px-3 pb-3 space-y-1">
                
                <p className="text-xs text-gray-700 line-clamp-2">{product.title}</p>

                <p className="text-orange-600 font-bold text-sm">Rs. {Math.round(product.price * 280)}</p>

                <div className="flex items-center text-xs gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span key={num} className={num <= stars ? "text-yellow-400" : "text-gray-300"}>★</span>))}
                  <span className="text-gray-500 ml-1">({product.rating.count})</span>
                </div>
              </div>
            </div>
          );
        })}

        </div>
      </div>
    </>
  );
}

export default Products;
