function ProductCard({ title, price, image, stockStatus }) {
  const isOutOfStock = stockStatus === 0 || stockStatus === "Out of Stock";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs mx-auto sm:mx-0">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg"/>
      <h3 className="mt-3 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-blue-600 font-bold text-lg">${price}</p>
      <p className={`mt-1 font-semibold ${ isOutOfStock ? "text-red-500" : "text-green-600"}`}>
        {isOutOfStock ? "Out of Stock !" : `Stock: ${stockStatus}`}</p>
      <button disabled={isOutOfStock} className={`mt-3 w-full py-2 rounded font-bold transition ${
          isOutOfStock ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
        {isOutOfStock ? "Sold Out" : "Buy Now"}
      </button>
    </div>
  );
}

export default ProductCard;
