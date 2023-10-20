import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImMenu, ImCross } from 'react-icons/im';
import './header.css'
import { AuthContext } from '../../Auth/AuthProvider';


const Header = () => {
    const [open, setOpen] = useState(true);

    const { user, logOut } = useContext(AuthContext)

    console.log(user)


    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };



    return (
        <section className='  top-0 z-10 data-theme={theme} '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>



                <img className='h-8 py-2 hidden md:block  md:h-16' src={'https://i.ibb.co/F0J9qym/black-removebg-preview-1.png'} alt="" />

                <div className='-order-1 lg:order-none'>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute  lg:gap-12 text-lg font-bold p-5 lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        <li className='' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/" >Home</NavLink></li>
                        {/* <li className='text-white' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to='/shop'  >Shop</NavLink></li> */}
                        <li className='' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/addProduct"  >Add Product</NavLink></li>
                        <li className='' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/cart"  >Cart</NavLink></li>
                        <li className='' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/contact"  >Contact Us</NavLink></li>

                    </ul>

                </div>
                <button onClick={toggleTheme} className="btn btn-sm bg-purple-500 text-white normal-case">
                    {theme === "light" ? "Dark Theme" : "Light Theme"}
                </button>


                {/* <button className='py-4 '><NavLink className='px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-0.5 md:py-2' to="/login"  >Log in</NavLink></button> */}

                <div className='py-2'>

                    {
                        user ?

                            <div className="flex gap-2 items-center">
                                <div>
                                    <div className='hidden  md:block'>
                                        <div className='flex items-center gap-3'>
                                            <div className="w-10 md:w-11 h-10 md:h-11 mask mask-circle">
                                                <img className='mx-auto ' src={user.photoURL} />
                                            </div>
                                            <div>
                                                <h2 className='text-purple-500 text-lg font-semibold'>{user.displayName}</h2>
                                                <h2 className='text-purple-500 text-lg font-semibold'>{user.email}</h2>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="dropdown dropdown-end md:hidden">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <h2 className='text-purple-500 text-lg font-semibold'>{user.displayName}</h2>

                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <button onClick={logOut} className='px-4 hover:bg-purple-500   font-medium md:font-semibold hover:duration-500 border-2 border-purple-500 hover:text-white rounded-full py-2'><NavLink to="/login"  >Log Out</NavLink></button>
                            </div>
                            :
                            <div className='py-2'>
                                <button className=''><NavLink className='px-4 hover:bg-purple-500   font-medium md:font-semibold hover:duration-500 border-2 border-purple-500 hover:text-white rounded-full py-2' to="/login"  >Log in</NavLink></button>
                            </div>
                    }

                </div>
            </nav>
        </section>
    );
};

export default Header;