import React, { useState } from "react";
import Slider from "react-slick";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { MdCloseFullscreen, MdAlternateEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

import HomeBanner from "../../components/Header/HomeBanner"; 

import ProductModel from "../../components/ProductModel";

import cartimg1 from "../../assests/images/cartimg1.webp";
import cartimg2 from "../../assests/images/cartimg2.webp";
import cartimg3 from "../../assests/images/cartimg3.webp";
import productimg from "../../assests/images/productimg.webp";
import news from "../../assests/images/news.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  
 var productSider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  const [modelOpen, setModalOpen] = useState(false);
  const [cartImg, setCartImg] = useState(null);

  const handleOpenModal = (imgSrc) => {
    setModalOpen(true);
    setCartImg(imgSrc);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <HomeBanner />
      {/* <HomeCat/> */} {/* Commented out since unused */}

      
      <section className="homeProduct">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="banner ms-1">
                <img src={cartimg1} alt="Banner product 1" className="cursor" />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <FaAngleDown />
                </Button>
              </div>

              <div className="product_row w-100">
                <Slider {...productSider}>
                  <div className="item productItem mt-2 mr-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg2)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg2}
                        alt="Best seller product 1"
                        className="productimg w-100"
                      />
                      <Rating name="read-only" value={5} readOnly />
                      <span className="badge badge-primary">18%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 me-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg1)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg1}
                        alt="Best seller product 2"
                        className="productimg w-100 me-2"
                      />
                      <Rating name="read-only" value={3.4} readOnly />
                      <span className="badge badge-primary">20%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 me-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(productimg)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={productimg}
                        alt="Best seller product 3"
                        className="productimg w-100 me-2"
                      />
                      <Rating name="read-only" value={5} readOnly />
                      <span className="badge badge-primary">40%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 mr-4">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg2)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg2}
                        alt="Best seller product 4"
                        className="productimg w-100"
                      />
                      <Rating name="read-only" value={4.5} readOnly />
                      <span className="badge badge-primary">10%</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          {/* second banner part */}
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="banner ms-1">
                <img src={cartimg3} alt="Banner product 2" className="cursor" />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-sml mb-0">Available product in stock</p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <FaAngleDown />
                </Button>
              </div>

              <div className="product_row w-100">
                <Slider {...productSider}>
                  <div className="item productItem mt-2 mr-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg2)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg2}
                        alt="New product 1"
                        className="productimg w-100"
                      />
                      <Rating name="read-only" value={5} readOnly />
                      <span className="badge badge-primary">18%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 me-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg1)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg1}
                        alt="New product 2"
                        className="productimg w-100 me-2"
                      />
                      <Rating name="read-only" value={3.4} readOnly />
                      <span className="badge badge-primary">20%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 me-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(productimg)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={productimg}
                        alt="New product 3"
                        className="productimg w-100 me-2"
                      />
                      <Rating name="read-only" value={5} readOnly />
                      <span className="badge badge-primary">40%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 mr-4">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg2)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg2}
                        alt="New product 4"
                        className="productimg w-100"
                      />
                      <Rating name="read-only" value={4.5} readOnly />
                      <span className="badge badge-primary">10%</span>
                    </div>
                  </div>
                </Slider>

                <div className="PoductRow2 d-flex mt-4">
                  <div className="item productItem mt-2 mr-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg2)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg2}
                        alt="Additional product 1"
                        className="productimg w-100"
                      />
                      <Rating name="read-only" value={5} readOnly />
                      <span className="badge badge-primary">18%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 me-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg1)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg1}
                        alt="Additional product 2"
                        className="productimg w-100 me-2"
                      />
                      <Rating name="read-only" value={3.4} readOnly />
                      <span className="badge badge-primary">20%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 me-2">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(productimg)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={productimg}
                        alt="Additional product 3"
                        className="productimg w-100 me-2"
                      />
                      <Rating name="read-only" value={5} readOnly />
                      <span className="badge badge-primary">40%</span>
                    </div>
                  </div>
                  <div className="item productItem mt-2 mr-4">
                    <div className="imgWrapper ">
                      <MdCloseFullscreen
                        className="fullScreen"
                        onClick={() => handleOpenModal(cartimg2)}
                        style={{ cursor: "pointer" }}
                      />
                      <FaRegHeart className="heart" />
                      <img
                        src={cartimg2}
                        alt="Additional product 4"
                        className="productimg w-100"
                      />
                      <Rating name="read-only" value={4.5} readOnly />
                      <span className="badge badge-primary">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModel open={modelOpen} onClose={handleCloseModal} img={cartImg} />

      <section className="newsLetterSection mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-0">$20 discount for your first order</p>
              <h4 className="text-white">Join our newsletter and get...</h4>
              <p className="texts">
                Join our email subscription now to get <br />
                updates on promotions and coupons.
              </p>

              <form action="">
                <MdAlternateEmail />
                <input type="text" placeholder="Enter your email" aria-label="Email address" />
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={news} alt="Newsletter banner" className="newsimg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};




export default Home;
