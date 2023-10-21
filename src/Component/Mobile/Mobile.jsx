import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';

const Mobile = () => {
    const [allProducts, setAllProducts] = useState([])
    const products = useLoaderData()

    useEffect(() => {
        const mobiles = products.filter(prod => prod.category.toLocaleLowerCase() === "Mobiles".toLocaleLowerCase())
        console.log(mobiles)
        if (mobiles.length > 4) {
            const sliced = mobiles.slice(0, 4)
            setAllProducts(sliced)
        } else {
            setAllProducts(mobiles)
        }
    }, [])
    // console.log(products)

    return (
        <div style={{ display: allProducts.length > 0 ? 'block' : 'none' }}>
            <div>
                <h2 className='text-2xl font-bold mt-10  px-2 bg-base-100  rounded-sm'>Mobiles</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    allProducts.map(product => <Link to={`/details/${product._id}`} key={product._id}> <div >
                        <div className="card px-5  shadow-lg">
                            <figure className="px-10 pt-10 relative">
                                <img src={product.image} alt="Shoes" className="rounded-xl" />
                                <button className='absolute bottom-3 hover:bg-purple-500 hover:duration-500 hover:text-white right-3 text-3xl shadow-xl rounded-full p-2 '>
                                    <AiOutlineShoppingCart />
                                </button>
                            </figure>
                            <p className='text-clr text-xs  rounded-tr-md rounded-bl-md '>{product.brand}</p>
                            <div className=" items-center text-left space-y-2">
                                <h2 className="font-semibold text-xl">{product.name}</h2>
                                <p className='h-[78px] overflow-hidden'>{product.description}</p>

                                {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                            </div>
                            <div className='flex justify-between items-center my-4'>
                                <p className="font-semibold my-2 text-lg">Price: <span className='text-2xl'>{product.price}</span>$</p>
                                <div className=''>
                                    <p className='flex md:my-1 items-center w-fit py-0.5 rounded-full text-xs bg-purple-500 text-white px-1.5 '>{product.rating}<AiFillStar /></p>
                                </div>

                            </div>

                        </div>
                    </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Mobile;