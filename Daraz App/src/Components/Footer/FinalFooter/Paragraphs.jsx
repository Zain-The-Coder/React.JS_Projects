function Paragraph () {
    let firstDivPara = `Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s 
    largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was 
    to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an
     online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being 
     just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. 
     Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.`
    let miniPara = `Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater
     to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of
      your order, we have a simple 7-day return or exchange policy.`

   
     return (
        <>
        <section className="flex justify-around font-[poppins] text-[11px] py-[70px] w-[85%] ml-[5%] text-[#9595b4]">
            <section className="w-[20%]">
                <div>
                    <h3 className="uppercase text-[15px] text-[#606060]">How Daraz Transformed Online Shopping in Pakistan</h3>
                    <p className="py-[10px]">How Daraz Transformed Online Shopping in Pakistan</p>
                    <p>{firstDivPara}</p>
                </div>
                <div>
                    <h3 className="uppercase text-[15px] text-[#606060] py-[5px]">What Makes Us Different from Other Online Shopping Platforms?</h3>
                    <p><b className="text-[#9595b4] text-[12px]">Select from the Largest Online Marketplace in Pakistan </b> <br />{miniPara}</p>
                </div>
            </section>
            <section className="w-[20%]">
                <div className="flex gap-[10px] flex-col">
                    <p><b className="text-[12px] text-[#9595b4]">Shop from Verified Vendors</b><br />{miniPara}</p>
                    <p><b className="text-[12px] text-[#9595b4]">Shop Around the World with Daraz Global Collection</b><br />{miniPara}</p>
                    <p><b className="text-[12px] text-[#9595b4]">Avail Exclusive Discounts, Offers, and Promotions</b><br />{firstDivPara}</p>
                </div>
            </section>
            <section className="w-[20%]">
                <div>
                    <h3 className="uppercase text-[15px] text-[#606060]">Top Categories & Brands</h3>
                    <p>{firstDivPara}</p>
                </div>
                <div>
                    <p><b className="text-[12px] my-[10px] text-[#9595b4]">HOME APPLIANCES</b><br />{firstDivPara}</p>
                </div>
            </section>
            <section className="w-[20%]">
                <div>
                    <p><b>WOMEN'S FASHION</b>{firstDivPara}</p>
                    <p><b>MEN'S FASHION</b>{miniPara}</p>
                </div>
            </section>
        </section>
        </>
    )
}

export default Paragraph ;