import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import SliderHome2 from '../../Component/SliderHome2/SliderHome2';

const BrandProducts = () => {
    const [brandData, setBrandData] = useState([])
    const category = useParams()
    const allBrandData = useLoaderData()
    // console.log(brandData)

    useEffect(() => {
        const filteredData = allBrandData.filter(aData => aData.brand.toLocaleLowerCase() === category.name.toLocaleLowerCase())
        setBrandData(filteredData)
    }, [])


    return (
        <div>
            <div>
                <SliderHome2></SliderHome2>
            </div>
            <div className='text-center my-5 py-5 rounded-sm bg-base-100'>
                <h2 className=' text-2xl text-center md:text-4xl font-extrabold '>Choose your favorite {category.name} product</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    brandData.map(product => <div
                        key={product._id}>
                        <div className="card px-5  bg-base-100">
                            <figure className="px-10 pt-10 relative">
                                <img src={product.image} alt="Shoes" className="rounded-xl" />
                                <button className='absolute bottom-3 hover:bg-purple-500 hover:duration-500 hover:text-white right-3 text-3xl shadow-xl rounded-full p-2 '>
                                    <AiOutlineShoppingCart />
                                </button>
                            </figure>
                            <p className='bg-gray-400 text-sm w-fit rounded-tr-md rounded-bl-md px-2'>{product.category}</p>
                            <div className=" items-center text-left space-y-2">
                                <h2 className="font-semibold text-xl">{product.name}</h2>
                                <p className=''>{product.description}</p>

                                {/* <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                            <div className='flex justify-between items-center my-4'>
                                <p className="font-semibold my-2 text-lg">Price: <span className='text-2xl'>{product.price}</span>$</p>

                                <div className=''>
                                    <p className='flex items-center w-fit justify-end rounded-full my-0 bg-purple-500 text-white px-1 font-bold'>{product.rating}<AiFillStar /></p>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <Link></Link>
                                </button>
                                <button  >
                                    <Link >
                                        <RiDeleteBin2Line />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default BrandProducts;