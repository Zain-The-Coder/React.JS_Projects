import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function dataFetcher() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }
    dataFetcher();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-[poppins] pb-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <h1 className="text-[#424242] text-xl sm:text-2xl font-bold py-5 sm:py-8">Our Products</h1>

        {error && <p className="text-red-600 font-bold text-center py-10">{error}</p>}
        {loading && <Loader />}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4">
          {products.map((product) => {
            const stars = Math.round(product.rating.rate);

            return (
              <div key={product.id} className="bg-white rounded-md shadow-sm hover:shadow-md transition flex flex-col overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}>
                <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center p-2 sm:p-4">
                  <img src={product.image} alt={product.title} className="h-full w-full object-contain"/>
                </div>

                <div className="p-2 sm:p-3 flex flex-col flex-grow">
                  <p className="text-[11px] sm:text-xs text-gray-700 line-clamp-2 leading-tight h-7 sm:h-8">{product.title}</p>
                  <p className="text-orange-600 font-bold text-sm sm:text-base mt-1 sm:mt-2">Rs. {Math.round(product.price * 280).toLocaleString()}</p>

                  <div className="flex items-center text-[10px] sm:text-xs mt-auto pt-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={num <= stars ? "" : "text-gray-200"}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-400 ml-1 hidden xs:inline">({product.rating.count})</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
