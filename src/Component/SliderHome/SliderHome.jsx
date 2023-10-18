
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const SliderHome = () => {
    return (
        <>
            <Swiper
                dir="rtl"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper w-full"
            >
                <SwiperSlide><img className='w-full' src="https://i.ibb.co/hW3F1k6/image.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src="https://i.ibb.co/Pt8Fhx9/image.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src="https://i.ibb.co/m9LFnRx/image.png" alt="" /></SwiperSlide>

            </Swiper>
        </>
    );
};

export default SliderHome;


// <img src="https://i.ibb.co/m9LFnRx/image.png" alt="" />
// <img src="https://i.ibb.co/hW3F1k6/image.png" alt="" />
// <img src="https://i.ibb.co/Pt8Fhx9/image.png" alt="" />