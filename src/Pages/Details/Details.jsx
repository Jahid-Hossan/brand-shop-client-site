import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { SlBadge } from 'react-icons/sl';
import { TbTruckDelivery } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {

    const singleProduct = useLoaderData()


    const handleCart = () => {
        const image = singleProduct.image;
        const name = singleProduct.name;
        const brand = singleProduct.brand;
        const category = singleProduct.category;
        const price = singleProduct.price;
        const description = singleProduct.description;
        const rating = singleProduct.rating;

        const productData = {
            image,
            name,
            brand,
            category,
            price,
            description,
            rating
        };
        console.log(image,
            name,
            brand,
            category,
            price,
            description,
            rating)

        fetch('https://tech-and-electronics-server-l9r2dl9p0-jahid-hossans-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Added to Cart Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className='px-5 bg-base-100'>
                <div className=' grid md:grid-cols-3 '>
                    <div className="hidden text-center mx-auto  md:block">
                        <img src={singleProduct.image} alt="" />
                    </div>
                    <div className="bg-base-100 w-full border-b-[1px] md:border-none">
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
                            <button onClick={handleCart} className=" w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add To Cart</button>
                        </div>
                    </div>
                    <div className='my-3.5'>
                        <div className='flex items-center p-3.5  gap-3'>
                            <SlBadge className='text-xl'></SlBadge>
                            <p>2 year warranty <a className='link link-primary' href="">Learn more</a></p>
                        </div>
                        <div className='flex items-center border-y-[1px] p-3.5 gap-3'>
                            <TbTruckDelivery className='text-xl'></TbTruckDelivery>
                            <p>Free delivery on Lockers & Pickup Points <br /> <a className='link link-primary' href="">Learn more</a></p>
                        </div>
                        <div className='flex items-center p-3.5  border-b-[1px] gap-3'>
                            <GiReturnArrow className='text-xl'></GiReturnArrow>
                            <p>Enjoy hassle free returns with this offer. <br /><a className='link link-primary' href="">Learn more</a></p>
                        </div>
                        <div className='flex items-center p-3.5 gap-3'>
                            <RiSecurePaymentLine className='text-2xl'></RiSecurePaymentLine>
                            <p >Secure Shopping. <br />Your data is always protected</p>
                        </div>
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