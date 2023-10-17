import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImMenu, ImCross } from 'react-icons/im';
import './header.css'


const Header = () => {
    const [open, setOpen] = useState(true);







    return (
        <section className='sticky top-0 z-10 bg-purple-500 '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>


                <h2>Shop Name</h2>
                {/* <img className='h-8 py-2 hidden md:block text-white md:h-16'  alt="" /> */}

                <div className='-order-1 lg:order-none'>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute bg-purple-500 lg:gap-12 text-lg font-bold p-5 lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/" >Home</NavLink></li>
                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to='/shop'  >Shop</NavLink></li>
                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/addProduct"  >Add Product</NavLink></li>
                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/cart"  >Cart</NavLink></li>
                        <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/contact"  >Contact Us</NavLink></li>

                    </ul>

                </div>


                <button className='py-4 '><NavLink className='px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-0.5 md:py-2' to="/login"  >Log in</NavLink></button>


            </nav>
        </section>
    );
};

export default Header;