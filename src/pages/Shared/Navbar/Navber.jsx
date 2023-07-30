import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Navber = () => {

    const user = false;

    const navlink = <>
        <li className='lg:mr-5'><NavLink className='text-lg' to='/'>Home</NavLink></li>
        <li className='lg:mr-5'><NavLink className='text-lg' to='/about'>About</NavLink></li>
        <li className='lg:mr-5'><NavLink className='text-lg' to='/products'>Products</NavLink></li>
        <li className='lg:mr-5'><NavLink className='text-lg' to='/contact'>Contact</NavLink></li>
        <div className='flex items-center lg:mr-5'>
            <li>
                <NavLink className='text-lg relative' to='/cart'>
                    <FaCartShopping className='text-3xl'></FaCartShopping>
                    <div className='bg-primary absolute -top-1 right-0 w-[25px] h-[25px] rounded-full flex items-center justify-center text-sm text-white'>0</div>
                </NavLink></li>
        </div>
        {user ?
            <div className='btn btn-primary hover:bg-transparent border-2 text-white hover:text-primary'><Link className='hover:bg-transparent hover:text-primary' to='/'>Sign Out</Link></div>
            :
            <Link className='hover:bg-transparent hover:text-primary' to='/signIn'><div className='btn btn-primary hover:bg-transparent border-2 text-white hover:text-primary'>Sign In</div></Link>
        }

    </>

    return (
        <div className='bg-slate-100'>
            <div className="navbar container mx-auto py-5">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu leading-8 menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <div>
                        <Link to='/' className="upper-case text-3xl font-bold">
                            <div className='flex items-center'>
                                <div className='w-16'>
                                    <img src="/fav.png" alt="" />
                                </div>
                                <p>Store <span className='text-primary'>Commerce</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;