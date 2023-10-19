import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImMenu, ImCross } from 'react-icons/im';
import './header.css'
import { AuthContext } from '../../Auth/AuthProvider';


const Header = () => {
    const [open, setOpen] = useState(true);

    const { user, logOut } = useContext(AuthContext)

    console.log(user)






    return (
        <section className='sticky top-0 z-10 bg-purple-500 '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>



                <img className='h-8 py-2 hidden md:block text-white md:h-16' src={'https://i.ibb.co/vzfGJCz/GEDGETS-SHOP.png'} alt="" />

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


                {/* <button className='py-4 '><NavLink className='px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-0.5 md:py-2' to="/login"  >Log in</NavLink></button> */}

                <div className='py-2'>

                    {
                        user ?
                            // <div className="flex-none">
                            //     <ul className="menu-horizontal">
                            //         <li>
                            //             <details className=''>
                            //                 <summary className='list-none'>
                            //                     <div className="w-10 md:w-11 mask mask-circle">
                            //                         <img src={user?.photoURL} />
                            //                         {/* <h2>user.displayName</h2> */}
                            //                     </div>
                            //                 </summary>
                            //                 <ul className="py-2  px-4 bg-pink-500 space-y-5 right-3">
                            //                     <li className='text-white text-lg font-semibold'><a>{user?.displayName}</a></li>
                            //                     <li><button onClick={logOut} className=' w-full px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-1'><NavLink to="/login"  >Log Out</NavLink></button></li>
                            //                 </ul>
                            //             </details>
                            //         </li>
                            //     </ul>
                            // </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-10 md:w-11 mask mask-circle">
                                    <img src={user.photoURL} />
                                    {/* <h2>user.displayName</h2> */}
                                </div>
                                <h2 className='text-white text-lg font-semibold'>{user.displayName}</h2>
                                <button onClick={logOut} className='px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-2'><NavLink to="/login"  >Log Out</NavLink></button>
                            </div>
                            :
                            <div className='py-2'>
                                <button className=''><NavLink className='px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-2' to="/login"  >Log in</NavLink></button>
                            </div>
                    }

                </div>
            </nav>
        </section>
    );
};

export default Header;