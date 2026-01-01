import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";




const SearchBar = () => {
    return (
        <>
   <section className="flex flex-col md:flex-row items-center justify-start w-[90%] md:w-[70%] ml-[10%] p-2 gap-4 md:gap-6">
      
      <img className="h-12 w-32 object-contain"src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"alt="Daraz-logo"/>
      <div className="flex flex-1 items-center gap-2 md:gap-4 w-full">
        <div className="relative flex-1">
          <input type="text" placeholder="Search In Daraz" className="w-full font-poppins h-12 text-sm border-2 border-gray-300 rounded-md pl-3 text-[#121212] bg-white focus:outline-none focus:border-blue-500"/>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="text-gray-500 text-xl" />
      </div>
    </section>





        </>
    )
}

export default SearchBar ;


 