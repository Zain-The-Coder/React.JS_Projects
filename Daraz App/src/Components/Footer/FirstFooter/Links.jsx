

function Links () {

    const customerCare = ["Help Center", "How to Buy" , "Corporate & Bulk Purchasing" , "Returns & Refunds" , "Daraz Shop" , "Contact Us" , "Purchase Protection" , "Daraz Pick up Points"]
    const darazLinks = ["About Us" , "Digital Payments" , "Daraz Donates" , "Daraz Blog" , "Terms & Conditions" , "Privacy Policy" , "NTN Number : 4012118-6" , "STRN Number : 1700401211818" , "Online Shopping App" , "Online Grocery Shopping" , "Daraz Exclusive" , "Daraz University" , "Sell on Daraz" , "Join Daraz Affiliate Program"]
    
    return (
        <>
        <section className="flex gap-[150px]">
        <div className="text-gray-800">
            <h3 className="text-[16px] font-[poppins] pb-[6px]">Customer Care</h3>
            <ul>
                {customerCare.map((links) => (
                    <li className="font-[poppins] text-[11px]" key={links.id}>{links}</li>
                ))}
            </ul>
        </div>
        <div className="text-gray-800">
            <h3 className="text-[16px] font-[poppins] pb-[6px]">Daraz</h3>
            <ul>
                {darazLinks.map((links) => (
                    <li className="font-[poppins] text-[11px]" key={links.id}>{links}</li>
                ))}
            </ul>
        </div>
        </section>
        </>
    )
}

export default Links ;