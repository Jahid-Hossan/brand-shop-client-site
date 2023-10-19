import { AiFillStar } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const ProductCard = ({ product, products, setProducts }) => {
    return (
        <div className="flex items-center bg-base-100 rounded-lg ms:items-start ">
            <figure><img className="rounded-lg" src={product.image} alt="Movie" /></figure>


            <div className="p-2 md:p-5 md:flex">
                <div className="md:mr-4">

                    <p className="text-clr">{product.brand}</p>
                    <h2 className="text-sm md:text-base font-semibold py-0 md:py-2 ">{product.description}</h2>


                    <h2 className="text-base text-clr ">{product.name}</h2>
                    <p className="text-clr">Sold by <span className=" text-black">{product.brand}</span></p>
                    <p className='flex md:my-1 items-center w-fit py-0.5 rounded-full text-xs bg-purple-500 text-white px-1.5 '>{product.rating}<AiFillStar /></p>

                </div>


                <div className=" flex md:flex-col justify-between items-baseline">
                    <div className=" h-full">
                        <p className="inline text-sm text-clr">USD</p><span className="text-2xl font-bold">{product.price}</span>
                    </div>

                    <div className="">
                        {/* <ImBin className=""></ImBin> */}
                        <button className="flex items-center">
                            <ImBin className=""></ImBin>
                            <span>Remove</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;