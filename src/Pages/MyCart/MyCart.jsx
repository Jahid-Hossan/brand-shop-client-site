import React, { useState } from 'react';
import ProductCard from '../../Component/ProductCard/ProductCard';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            <div className=' px-5 my-10'>
                <div className='flex items-baseline mb-10'>
                    <h1 className='text-2xl font-bold'>Cart </h1><p className='text-clr'>({products.length} items)</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                            products={products}
                            setProducts={setProducts}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;