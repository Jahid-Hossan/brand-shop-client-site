import React from 'react';
import SliderHome from '../../Component/SliderHome/SliderHome';
import ShopByBrand from '../../Component/ShopByBrand/ShopByBrand';
import BestSelling from '../../Component/BestSelling/BestSelling';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <SliderHome />
            <ShopByBrand />
            <h2 className='text-2xl font-bold mt-10 mb-5 px-2 bg-base-100 py-5 rounded-sm'>Recommended for you</h2>
            <BestSelling />
        </div>
    );
};

export default Home;