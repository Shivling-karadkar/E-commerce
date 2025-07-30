import { Link } from 'react-router-dom';
import logo from '../../assests/images/logo.png';
import MyCountryDrop from './CountryDropdown/MyCountryDrop';
import SearchBox from './Header/SearchBox';
import { FiUser } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import Navagation from './Header/SearchBox/Navagation';
import { MyContext } from '../../App';

import { useContext, useState } from 'react';

const Header =()=>{
    

   const {cartCount}=useContext(MyContext);
    const context=useContext(MyContext)

return(
    <>
    <div className="headerWrapper">
        <div className="top-strip bg-blue">
            <div className="container">
                <p className="mb-0 mt-0 text-center">Due to the <b> COVID 19</b> epidemi ,order may be 
                    processed with a slight delay
                </p>
            </div>
        </div>



        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'} ><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="col-sm-10 d-flex align-items-center part2">
                       {
                        context.countryList.length!==0 && <MyCountryDrop/>
                       }
                        
                        <SearchBox/>
                        

                       

                            <div className='part3 d-flex align-item-center ms-auto'>
                                <button className='user me-3'><FiUser /></button>
                                <div className='ml-auto cartTab d-flex align-item-center'>
                                    <span className='price'>$2.29</span>
                                    <div className='position-relative ml-2'>
                                    <button className='user ms-2 '><BsCartPlus className={cartCount > 0 ? 'text-red' : 'text-black' }/></button>
                                   
                                   {cartCount >0 &&(
                                    <span className='count  badge-red d-flex align-item-center justify-content-center'>{cartCount}</span>
                                    )}
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>

        
       
        <Navagation title="home"/>
        
        
    </div>
    </>
)
}

export default Header;