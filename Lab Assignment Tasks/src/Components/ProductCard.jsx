function ProductCard ({ title, price, image, stockStatus }) {
    const isOutOfStock = stockStatus === 0 || stockStatus === "Out of Stock";
  return (
    <>
    <div style={{border: '1px solid #e2e8f0',borderRadius: '12px',padding: '15px',width: '250px',
      backgroundColor: 'white',boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',textAlign: 'center'}}>
      <img  src={image}  alt={title}  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
      
      <h3 style={{ margin: '15px 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>{title}</h3>
      <p style={{ fontWeight: 'bold', color: '#3b82f6', fontSize: '1.1rem' }}>${price}</p>

      <p style={{ fontSize: '0.85rem', color: isOutOfStock ? '#ef4444' : '#10b981',fontWeight: '600'}}>
        {isOutOfStock ? 'Out of Stock !' : `Stock: ${stockStatus}`}</p>

      <button disabled={isOutOfStock} style={{  marginTop: '10px', width: '100%', padding: '10px', borderRadius: '6px',
          border: 'none',backgroundColor: isOutOfStock ? '#cbd5e1' : '#3b82f6',color: 'white',cursor: isOutOfStock ? 'not-allowed' : 'pointer',fontWeight: 'bold'}}>
        {isOutOfStock ? 'Sold Out' : 'Buy Now'}</button>
    </div>
  </>
  );
};

export default ProductCard ;