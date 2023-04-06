import React from 'react';
import icon from '../../assets/icon.png'
import accountI from '../../assets/accountIcon.png'
import cartI from '../../assets/cartIcon.png'
import divider from '../../assets/divider.png'
import search from '../../assets/search.png'

const Navbar1 = () => {
    return (
        <div>
            <div className="navbar bg-[#D4D4D4]">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button className="flex mr-3 text-white">
                        <div className='rounded-full mr-2 bg-[#404956] '><img className='p-2' src={accountI} alt="" /></div>
                        <p className='mt-2'>My Account</p>
                    </button></li>
                        <li className='text-center'><button className="flex text-white">
                        <div className='rounded-full mr-2 bg-[#404956]'><img className='p-2' src={cartI} alt="" /></div>
                        <p className='mt-2'>Cart</p>
                    </button></li>
                    </ul>
                </div>

                <div className="navbar-start">
                    <img src={icon} width={20} height={20} alt="" />
                    <h1><span className='text-xl font-bold text-[#118B91]'>SUMASH</span> <span className='text-xl text-[#404956]'>TECH</span></h1>
                </div>
                <div className="hidden lg:block">
                    <div className="flex">
                        <input type="search" name="Search" placeholder="Search For Products" className="py-2 pl-4 text-sm rounded-l-lg text-[#7E7E7E] bg-white w-[350px]" />

                        <button type="submit" title="Search" className="p-2 rounded-md bg-[#F16A4F]">
                            <img src={search} alt="" />
                        </button>
                    </div>
                </div>

                <div className="navbar-end ">
                    <button className="lg:flex mr-3 text-[#0B0B0B] hidden lg:block">
                        <div className='rounded-full mr-2 bg-[#404956] '><img className='p-2' src={accountI} alt="" /></div>
                        <p className='mt-2'>My Account</p>
                    </button>
                    <img className='mr-3 hidden lg:block' src={divider} alt="" />
                    <button className="lg:flex text-[#0B0B0B] hidden lg:block">
                        <div className='rounded-full mr-2 bg-[#404956]'><img className='p-2' src={cartI} alt="" /></div>
                        <p className='mt-2'>Cart</p>
                    </button>
                    <div className="flex block lg:hidden">
                        <input type="search" name="Search" placeholder="Search For Products" className="py-2 pl-4 text-sm rounded-l-lg text-[#7E7E7E] bg-white w-[120px]" />

                        <button type="submit" title="Search" className="p-3 rounded-md bg-[#F16A4F]">
                            <img src={search} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;