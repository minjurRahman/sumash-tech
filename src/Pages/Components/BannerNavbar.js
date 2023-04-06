import React from 'react';
import home from '../../assets/home.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youTube from '../../assets/youTube.png'
import whatsApp from '../../assets/whatsApp.png'
import linkedin from '../../assets/linkedin (2).png'

const BannerNavbar = () => {
    return (
        <div>
            <div className="navbar pt-6 pb-6">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="btn btn-ghost normal-case ">SMARTPHONE</a></li>
                        <li className='text-center'><h6 className='text-center btn btn-ghost normal-case'>iPhone 13 Pro Max</h6></li>
                        <li><a><img src={facebook} alt="" />Facebook</a></li>
                        <li><a><img src={instagram} alt="" />Instagram</a></li>
                        <li><a><img src={youTube} alt="" />youTube</a></li>
                        <li><a><img src={whatsApp} alt="" />WhatsApp</a></li>
                        <li><a><img src={linkedin} alt="" />LinkedIn</a></li>
                    </ul>
                </div>

                <div className="flex-1 gap-6 ml-12 lg:ml-0">
                    <a className="btn btn-ghost normal-case "><img src={home} alt="" className='pr-2' />HOME</a>
                    <a className="btn btn-ghost">SMARTPHONE</a>
                    <h6 className='hidden lg:block'>iPhone 13 Pro Max</h6>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal px-1">
                        <li><a><img src={facebook} alt="" /></a></li>
                        <li><a><img src={instagram} alt="" /></a></li>
                        <li><a><img src={youTube} alt="" /></a></li>
                        <li><a><img src={whatsApp} alt="" /></a></li>
                        <li><a><img src={linkedin} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BannerNavbar;