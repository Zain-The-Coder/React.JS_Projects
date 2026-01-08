import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';


function LeftLinks () {
    return (
        <>
        <nav>
          <ul className="fixed font-[poppins] text-[12px] top-[66%] left-2 flex flex-col gap-[17px] text-[#999999] cursor-pointer">
           
            <li className="group flex items-center gap-[10px] hover:bg-[#f4f4f6] p-[5px] hover:text-orange-400">
                <a><KeyboardArrowUpIcon fontSize="small" /></a>
                <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Go To Top</span>
            </li>

            <li className="group flex items-center gap-[10px] hover:bg-[#f4f4f6] p-[5px] hover:text-orange-400">
                <ListAltIcon fontSize="small" />
                <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Our Products</span>
            </li>

            <li className="group flex items-center gap-[10px] hover:bg-[#f4f4f6] p-[5px] hover:text-orange-400">
                <InfoIcon fontSize="small" />
                <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">About Us</span>
            </li>

            <li className="group flex items-center gap-[10px] hover:bg-[#f4f4f6] p-[5px] hover:text-orange-400">
                <PersonIcon fontSize="small" />
                <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Contact Us</span>
            </li>
          </ul>
        </nav>

        </>
    )
}
export default LeftLinks ;