// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HeroSection = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[600px]"
            >
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/27989044/pexels-photo-27989044/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/27989044/pexels-photo-27989044/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/27989044/pexels-photo-27989044/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroSection;