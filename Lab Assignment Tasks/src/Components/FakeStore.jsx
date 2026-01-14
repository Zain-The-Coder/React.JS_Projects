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
    {load && (<p style={{ textAlign: "center", color: "#6b7280", margin: "10px 0" }}>Loading......</p>)}
        <h1 style={{ padding: "12px 16px", margin: 0, fontSize: "18px", fontWeight: "600",
        borderBottom: "1px solid #e5e7eb"}}> Fake Store Products </h1>

    {products.map((items, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px",
        borderBottom: "1px solid #e5e7eb", backgroundColor: "white" }}>
      <img src={items.image} alt={items.title} style={{width: "48px", height: "48px", borderRadius: "50%",
          objectFit: "cover", flexShrink: 0}}/>

      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 4px",fontSize: "15px",fontWeight: "500",color: "#111827"}}>
          {items.title}
        </h3>

        <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", whiteSpace: "nowrap", overflow: "hidden",
            textOverflow: "ellipsis" , maxWidth:"1000px"}}>{(items.description)}</p></div>
        <p style={{ margin: 0, fontSize: "13px", color: "#25D366", fontWeight: "500", whiteSpace: "nowrap" }}> ${items.price}</p>
    </div>
  ))}
</>


    )
}
export default FakeStore ;