import React from "react";
import Slider from "react-slick";
import hb from 'C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\hb.webp';
import hb2 from 'C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\hb2.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const HomeBanner =()=>{

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
return(
    <div className="homeBannerSection">
            <div className='row'>
                <Slider {...settings}>
                   <div className="item w-100 ms-50">
                        <img src={hb} alt="Banner 1" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src={hb2} alt="Banner 2" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src={hb}  alt="Banner 3" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src={hb2}  alt="Banner 4" className="w-100"/>
                    </div> 
                </Slider>
            </div>
        </div>
)
}

export default  HomeBanner;