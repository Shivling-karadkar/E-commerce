import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { useState } from 'react';
const Navagation=(props)=>{

    const [isOpenSidebarVal, setisOpenSidebarVal]=useState(false);

    return(
        <>
        <nav>
            <div className='mt-3  container'>
                <div className='row Catagoires'>
                    <div className='col-sm-3 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab alighn-item-center' onClick={()=>{setisOpenSidebarVal(!isOpenSidebarVal)}} variant="contained" startIcon={<IoIosMenu />} endIcon={<FaAngleDown/>}>
                                <span>ALL CATEGORIES</span>
                            </Button>
                            <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' :' '}`}>
                               <ul>
                                <li><Link to="/"><Button>Men</Button></Link>
                                <div className="submenu">
                                    <Link to="/"><Button >Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                                </li>
                                <li><Link to="/"><Button>Women</Button></Link></li>
                                <li><Link to="/"><Button>Beauty</Button></Link></li>
                                <li><Link to="/"><Button>Kids</Button></Link></li>
                                <li><Link to="/"><Button>Gift</Button></Link></li>
                                <li><Link to="/"><Button>Blog</Button></Link></li>
                               </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ms-auto'>
                            <li className='home-link list-inline-item' ><Link to="/"><Button><IoHomeOutline /> &nbsp;Home</Button></Link></li>
                            <li className='home-link list-inline-item'><Link to="/"><Button>Men</Button></Link>
                                <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='home-link list-inline-item'><Link to="/"><Button>Women</Button></Link>
                            <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                                
                            <li className='home-link list-inline-item'><Link to="/"><Button>Beauty</Button></Link>
                            <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='home-link list-inline-item'><Link to="/"><Button>Kids</Button></Link>
                            <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='home-link list-inline-item'><Link to="/"><Button>Gift</Button></Link>
                            <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='home-link list-inline-item'><Link to="/"><Button>Blog</Button></Link>
                            <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className='home-link list-inline-item'><Link to="/"><Button>Contact Us</Button></Link>
                            <div className='submenu mt-3'>
                                <Link to="/"><Button >Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </nav>

        

        </>
    )
}

export default Navagation;