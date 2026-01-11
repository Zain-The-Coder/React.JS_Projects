import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-4 font-[poppins]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-4">

        <button onClick={() => navigate(-1)} className="text-sm text-blue-600 mb-3">← Back</button>

        <div className="grid md:grid-cols-2 gap-6">
          <img src={product.image} alt={product.title} className="h-64 mx-auto object-contain"/>

          <div>
            <h1 className="text-xl font-bold">{product.title}</h1>

            <p className="text-gray-600 mt-2 text-[14px]">{product.description}</p>

            <p className="text-orange-600 font-bold text-xl mt-3">Rs. {Math.round(product.price * 280).toLocaleString()}</p>

            <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>

<p className="text-sm mt-2"> ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0} reviews) </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
