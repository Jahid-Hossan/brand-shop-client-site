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



                <img className='h-14 py-2 block  md:h-16' src={'https://i.ibb.co/F0J9qym/black-removebg-preview-1.png'} alt="" />

                <div className='-order-1 lg:order-none'>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute  lg:gap-12 text-lg font-bold z-10 bg-white  lg:bg-transparent p-5 lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        <li className='' ><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        } to="/" >Home</NavLink></li>

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
                {/* <button onClick={toggleTheme} className="btn btn-sm bg-purple-500 text-white normal-case">
                    {theme === "light" ? "Dark Theme" : "Light Theme"}
                </button> */}



                {/* <button className='py-4 '><NavLink className='px-4 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-0.5 md:py-2' to="/login"  >Log in</NavLink></button> */}

                <div className='flex gap-3'>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onClick={toggleTheme} type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
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
                </div>
            </nav>
        </section>
    );
};

export default Header;