import ProductCard from "./ProductCard";
function CardGenerator () {
  const products = [
    { id: 1, title: "Wireless Headphones", price: 99, stock: 5, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { id: 2, title: "Mechanical Keyboard", price: 150, stock: 0, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300" },
    { id: 3, title: "Gaming Mouse", price: 45, stock: 12, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300" }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Featured Products</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(item => (
          <ProductCard 
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.img}
            stockStatus={item.stock}
          />
        ))}
      </div>
    </div>
  );
}
export default CardGenerator ;