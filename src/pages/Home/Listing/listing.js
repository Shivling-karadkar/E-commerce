import Sidebar from "../../../components/Sidebar/sidebar";
import hb2 from "C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\hb2.webp";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsSixBold } from "react-icons/pi";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Listing=()=>{
    return (
     <>
     <section className="product_Listing_Page d-flex">
        <div className="container">
            <div className="productListing d-flex">
                <Sidebar/>

                <div className="content_right">
                    <img src={hb2} alt="" className="listingimg w-100 ms-2" />
                    <div className="showBy">
                        <div className="d-flex align-items-center btnwrapper">                  
                        <Button className="filteric"><IoMdMenu /></Button> 
                        <Button className="filteric ms-0"><CgMenuGridR /></Button>
                        <Button className="filteric ms-0"><PiDotsSixBold  /></Button>
                    </div>

                    <div className="ml-auto showByFilter">
                        <Button>Show 9<span className='me-2'><FaAngleDown/></span></Button>
                    </div>
                </div>
                
 

                 
                </div>
            </div>
        </div>
     </section>
     </>   
    )
}

export default Listing;
