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
    console.log(brandData)

    useEffect(() => {
        const filteredData = allBrandData.filter(aData => aData.brand.toLocaleLowerCase() === category.name.toLocaleLowerCase())
        setBrandData(filteredData)
    }, [])



    return (
        <div>

            {
                brandData.length === 0 ?
                    <div className='text-center my-[40vh]'>
                        <h2 className='text-4xl font-extrabold'>Oops!!</h2>
                        <p className='text-2xl font-bold'>Product is not available</p>
                    </div>
                    :
                    <div>
                        <div>
                            <SliderHome2 category={category}></SliderHome2>
                        </div>
                        <div className='text-center my-5 py-5 rounded-sm bg-base-100'>
                            <h2 className=' text-2xl text-center md:text-4xl font-extrabold '>Choose your favorite {category.name} product</h2>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            {
                                brandData.map(product => <div
                                    key={product._id}>
                                    <div className="card px-5  shadow-lg">
                                        <figure className="px-10 pt-10 relative">
                                            <img src={product.image} alt="Shoes" className="rounded-xl" />
                                            <button className='absolute bottom-3 hover:bg-purple-500 hover:duration-500 hover:text-white right-3 text-3xl shadow-xl rounded-full p-2 '>
                                                <AiOutlineShoppingCart />
                                            </button>
                                        </figure>

                                        <div className=" items-center text-left space-y-2">
                                            <h2 className="font-semibold h-8 overflow-hidden text-xl">{product.name}</h2>
                                            <div className='flex gap-5'>
                                                <p className=' border-[1px]  text-xs text-purple-300 w-fit rounded-tr-md rounded-bl-md px-2'>{product.category}</p>
                                                <p className=' border-[1px]  text-xs text-purple-300 w-fit rounded-tr-md rounded-bl-md px-2'>{product.brand}</p>
                                            </div>
                                            <p className='h-[78px] overflow-hidden'>{product.description}</p>

                                            {/* <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                                        </div>
                                        <div className='flex justify-between items-center my-2'>
                                            <p className="font-semibold my-2 text-lg">Price: <span className='text-xl'>{product.price}.00$</span></p>

                                            <div className=''>
                                                <p className='flex md:my-1 items-center w-fit py-0.5 rounded-full text-xs bg-purple-500 text-white px-1.5 '>{product.rating}<AiFillStar /></p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between mb-2'>
                                            <button className='btn btn-sm  bg-purple-500 text-white hover:bg-purple-300'   >
                                                <Link to={`/details/${product._id}`}>Details</Link>
                                            </button>
                                            <button className='btn btn-sm  bg-purple-500 text-white hover:bg-purple-300'  >
                                                <Link to={`/update/${product._id}`}>Update</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
            }
        </div>
    );
};

export default BrandProducts;