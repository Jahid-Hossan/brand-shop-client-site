import React from 'react';
import SliderHome from '../../Component/SliderHome/SliderHome';
import ShopByBrand from '../../Component/ShopByBrand/ShopByBrand';
import BestSelling from '../../Component/BestSelling/BestSelling';
import Computer from '../../Component/Computer/Computer';
import Mobile from '../../Component/Mobile/Mobile';
import Accessories from '../../Component/Accessories/Accessories';
import Slider2 from '../../Component/SliderHome/Slider2';

const Home = () => {

    return (
        <div className='container mx-auto'>
            <div className=''>
                <SliderHome />
            </div>
            <ShopByBrand />
            <BestSelling />
            <Computer />
            <Mobile></Mobile>
            <Accessories></Accessories>
            <Slider2></Slider2>
        </div>
    );
};

export default Home;