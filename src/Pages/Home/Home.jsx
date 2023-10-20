import React from 'react';
import SliderHome from '../../Component/SliderHome/SliderHome';
import ShopByBrand from '../../Component/ShopByBrand/ShopByBrand';
import BestSelling from '../../Component/BestSelling/BestSelling';
import Computer from '../../Component/Computer/Computer';
import Mobile from '../../Component/Mobile/Mobile';
import Accessories from '../../Component/Accessories/Accessories';

const Home = () => {

    return (
        <div className='container mx-auto'>
            <SliderHome />
            <ShopByBrand />
            <BestSelling />
            <Computer />
            <Mobile></Mobile>
            <Accessories></Accessories>
        </div>
    );
};

export default Home;