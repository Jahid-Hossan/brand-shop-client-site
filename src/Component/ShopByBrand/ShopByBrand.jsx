import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


const ShopByBrand = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('/Brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])



    const breakPoints = {
        768: {
            slidesPerView: 7,
            spaceBetween: 0,
        }
    }


    return (
        <div className='my-5 relative' >
            <div className='text-center  py-5 rounded-sm bg-base-100'>
                <h2 className=' text-2xl text-center md:text-4xl font-extrabold '>Brand Favorite</h2>
                <p className='py-2'>Choose your favorite brand</p>
            </div>
            <div className='bg-base-100 '>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    className="mySwiper"
                    modules={[Pagination, Navigation]}

                    loop={true}
                    breakpoints={breakPoints}
                >

                    {
                        brands.map((brand, idx) => <SwiperSlide className='' key={idx}><div className='text-center py-5  space-y-2' >
                            <div className='h-6 w-fit lg:h-10 mx-auto'>
                                <Link to={`/brand/${brand.brand_name}`}><img className='h-6 w-fit lg:h-10 mx-auto' src={brand.img} alt="" /></Link>
                            </div>
                            <h2 className='text-base  lg:text-2xl lg:font-bold'>{brand.brand_name}</h2>
                        </div></SwiperSlide>)
                    }
                </Swiper>

            </div>
            <div className='lg:hidden'>
                <button className='text-center btn-circle  btn-xs bottom-10 left-0 absolute'><BsArrowLeftCircle /></button>
                <button className='text-center btn-xs z-10 btn-circle bottom-10 right-0 absolute'><BsArrowRightCircle /></button>
            </div>
        </div>
    );
};

export default ShopByBrand;