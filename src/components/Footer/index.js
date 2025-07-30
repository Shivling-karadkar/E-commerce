import { IoShirtOutline } from "react-icons/io5";
import { PiVanDuotone } from "react-icons/pi";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";


const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="topinfo row">
                    <div className="col d-flex align-items-center">
                        <span><IoShirtOutline /></span>
                        <span className="ms-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><PiVanDuotone /></span>
                        <span className="ms-2">Free delievry for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><MdOutlineDiscount /></span>
                        <span className="ms-2">Daily mega discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><HiOutlineCurrencyRupee /></span>
                        <span className="ms-2">Best price on market</span>
                    </div>
                </div>

                <div className="row mt-4 linkWrap">
                        <div className="col">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                         <div className="col">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                         <div className="col">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                         <div className="col ">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul >
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                </div>

                <div className="copyright mt-3 pb-3 pt-3 ">
                    <p className="par mb-0">Copyright 2025 @ axy. All rights reserved .</p>
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Link to="#"><FaLinkedin /></Link>
                        </li>

                        <li className="list-inline-item ms-3">
                            <Link to="#"><FaGithub /></Link>
                        </li>

                        <li className="list-inline-item ms-3">
                            <Link to="#"><SiHackerrank /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
