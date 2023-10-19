import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const singleProduct = useLoaderData()
    console.log(singleProduct)
    return (
        <div>
            <div className='px-5 bg-base-100'>
                <div className=' grid md:grid-cols-3 '>
                    <div className="hidden text-center mx-auto  md:block">
                        <img src={singleProduct.image} alt="" />
                    </div>
                    <div className="bg-base-100 w-full">
                        <p className=''>{singleProduct.brand}</p>
                        <h2>{singleProduct.description}</h2>
                        <div className='md:hidden'>
                            <img src={singleProduct.image} alt="" />
                        </div>
                        <div className=''>
                            <p>Model Number: {singleProduct.name}</p>
                            <div className='flex gap-2 items-center border-l-2 pl-2'>
                                <p className='flex items-center w-fit justify-end rounded-full my-0 bg-purple-500 text-white px-1 '><span className='text-sm font-medium'>{singleProduct.rating}</span><span className='text-sm'><AiFillStar /></span></p><p className='text-gray-400 underline '>Rating</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h5>Price : </h5>
                            <div>
                                <h3>USD {singleProduct.price}.00</h3>
                                <p>Inclusive of VAT</p>
                            </div>
                        </div>
                        <div>
                            <p>Free Delivery by Tomorrow</p>
                        </div>
                        <div>
                            <button>Add To Cart</button>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <div>
                    <h2>Overview</h2>
                </div>
                <div>
                    The {singleProduct.name} boasts a gorgeous all-screen liquid retina lcd that is water resistant up to 2 metres for up to 30 minutes. moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% autofocus in low light.this phone boasts a gorgeous all-screen liquid retina lcd that is water resistant up to 2 metres for up to 30 minutes.the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes and the 26 mm wide lens provides up to 100% autofocus in low light.for all-day power, this phone features a fast charge capable 18 w adapter (sold separately). moreover, the a13 bionic chip incorporated into this phone facilitates for incredible multitasking.face id is the most secure facial authentication in a smartphone. it doesn't store or share your photo. provides better security than the touch id.
                </div>
            </div>
        </div>
    );
};

export default Details;