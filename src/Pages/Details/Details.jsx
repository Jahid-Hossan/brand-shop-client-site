import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { SlBadge } from 'react-icons/sl';
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
                        <p className='text-clr text-xl md:text-2xl'>{singleProduct.brand}</p>
                        <h2 className='text-2xl md:text-3xl font-semibold mb-3'>{singleProduct.description}</h2>
                        <div className='md:hidden'>
                            <img className='mx-auto' src={singleProduct.image} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <div className='order-last md:order-first'>
                                <p className='text-clr'>Model Number: {singleProduct.name}</p>
                                <div className='flex gap-2 items-center border-l-2 pl-2'>
                                    <p className='flex items-center w-fit justify-end rounded-full my-0 bg-purple-500 text-white px-1 '><span className='text-sm font-medium'>{singleProduct.rating}</span><span className='text-sm'><AiFillStar /></span></p><p className='text-clr underline '>Rating</p>
                                </div>
                            </div>
                            <div className='flex items-center  my-3 gap-1.5'>
                                <h5 className='hidden md:block'>Price : </h5>
                                <div className='lg:flex gap-1.5 items-center'>
                                    <h3 className='text-xl font-extrabold'>USD {singleProduct.price}.00</h3>
                                    <p className='text-clr'>Inclusive of VAT</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-l-2 pl-2 text-clr'>
                            <p>Free Delivery by <a className='link'>Tomorrow</a></p>
                        </div>
                        <div className='my-5'>
                            <button type="button" className=" w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add To Cart</button>
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <SlBadge></SlBadge>
                        <p>2 year warranty <a className='link link-primary' href="">Learn more</a></p>
                    </div>
                    <div>

                        <p>Free delivery on Lockers & Pickup Points <a className='link link-primary' href="">Learn more</a></p>
                    </div>
                </div>

            </div>
            <div className='px-5 bg-base-100'>
                <div>
                    <h2 className='text-xl font-bold py-2'>Overview</h2>
                </div>
                <div>
                    The {singleProduct.name} boasts a gorgeous all-screen liquid retina lcd that is water resistant up to 2 metres for up to 30 minutes. moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% autofocus in low light.this phone boasts a gorgeous all-screen liquid retina lcd that is water resistant up to 2 metres for up to 30 minutes.the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes and the 26 mm wide lens provides up to 100% autofocus in low light.for all-day power, this phone features a fast charge capable 18 w adapter (sold separately). moreover, the a13 bionic chip incorporated into this phone facilitates for incredible multitasking.face id is the most secure facial authentication in a smartphone. it doesn't store or share your photo. provides better security than the touch id.
                </div>
            </div>
        </div>
    );
};

export default Details;