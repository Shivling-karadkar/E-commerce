import { Swiper, SwiperSlide } from 'swiper/react';
import homecat1 from "C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\homecat1.jpg";
import { Navigation } from 'swiper/modules';
import all1 from "C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\AllCatagories\\all1.jpg"

const HomeCat =()=>{

    
   

    return (
        <>
        <section className="homecatogires w-100">
        <Swiper 
            slidesPreView={10}
            spaceBetween={0}
            navagation={true}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="mySwiper"
            >
    <div className="items col-9">
         <SwiperSlide>
             <div className="item text-center">
                <img src={all1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="item text-center">
                <img src={homecat1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="item text-center">
                <img src={homecat1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="item text-center">
                <img src={homecat1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="item text-center">
                <img src={homecat1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
             <div className="item text-center">
                <img src={homecat1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
             <div className="item text-center">
                <img src={homecat1} alt="" />
                <h6>Ref</h6>
            </div>
        </SwiperSlide>
        </div>  
        </Swiper> 
        
        </section>
        </>
    )
}

export default HomeCat;