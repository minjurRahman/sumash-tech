import React from 'react';
import BannerNavbar from './Components/BannerNavbar';
import car from '../assets/car.png'
import protection from '../assets/Protection.png'
import payment from '../assets/Payment.png'
import apple from '../assets/apple.svg'
import love from '../assets/love.png'
import compaire from '../assets/compaire.png'
import vector from '../assets/vector.png'
import phone from '../assets/image 20.png'


const Banner = () => {
    return (
        <div className='bg-[#ffffffff] pb-7'>
            <BannerNavbar></BannerNavbar>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 lg:m-0 '>
                {/* Three Phone Picture*/}
                <div className='col-span-1 grid grid-cols-2'>
                    <div className="card shadow-xl col-span-2 mt-7">
                        <img src={phone} alt="phone" className="rounded-xl" />
                    </div>

                    <div className='col-span-2 pt-3 mt-6'>
                        <div className='flex gap-2'>
                            <div className='card shadow-xl'>
                                <img src={phone} alt="phone" className="rounded-xl" />
                            </div>
                            <div className='card  shadow-xl'>
                                <img src={phone} alt="phone" className="rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Smart Phone Details  */}
                <div className='col-span-2'>
                    <div className='grid lg:grid-cols-3 gap-4'>
                        <div className='lg:col-span-2'>
                            <h6 className='leading-6 font-sans text-[#404956]'>Smartphone</h6>
                            <h3 className='text-5xl font-bold text-[#404956]'>iPhone 13 Pro Max</h3>
                            <div className='pt-5 flex gap-4'>
                                <button className='bg-[#F4F4F4] rounded-lg text-black p-1 pr-3 font-bold'><img src={apple} width={19} className='inline-block' alt="" /> Apple</button>
                                <button className='bg-[#F5F5F5] rounded-lg text-[#A9A9A9] p-1 pr-3 pl-3 border border-[#404956]'><img src={love} width={19} className='inline-block' alt="" /> Add To Wishlist</button>
                                <button className='bg-[] rounded-lg text-[#A9A9A9] p-1 pr-3'><img src={compaire} width={19} className='inline-block ' alt="" /> Compare</button>
                            </div>

                            <div className='grid grid-cols-2 gap-4 pt-8 text-center'>
                                <div className='col-span-2 p-[16px] rounded-lg bg-[#F16A4F] text-[#FFFFFF] text-xl mb-2'>
                                    Choose your capacity.
                                </div>
                                <div className='p-[10px] rounded-lg border border-[#A9A9A9] text-[#404956]'>8GB & 128GB</div>
                                <div className='p-[10px] rounded-lg border border-[#A9A9A9] bg-[#404956] text-white'>8GB & 128GB</div>
                                <div className='p-[10px] rounded-lg border border-[#A9A9A9] text-[#404956]'>8GB & 128GB</div>
                                <div className='p-[10px] rounded-lg border border-[#A9A9A9] bg-[#404956] text-white'>8GB & 128GB</div>
                            </div>

                            {/* Phone Color */}
                            <div className='pt-4 flex gap-5'>
                                <h6 className='text-2xl text-black font-bold mt-2'>Color:</h6>
                                <button className='rounded-full p-6 border-2 border-[#118B91] bg-[#118B91]'></button>
                                <button className='rounded-full border-2 border-[#DADADA] p-6 bg-[#F16A4F]'></button>
                                <button className='rounded-full p-6 border-2 border-[#404956] bg-[#404956]'></button>
                            </div>

                            {/* Phone Description */}
                            <div className='flex flex-col gap-2 mt-4 mb-2'>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />Measure blood oxygen saturation with Oxygen Beats </p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />1.1″ full-color AMOLED Touch screen Display</p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />24/7 Heart Rate monitoring</p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />Amazon Alexa Built-in</p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />15-Day Battery Life</p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />Sleep Monitoring</p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />Women’s Health Tracking</p>
                                <p className=''> <img className='inline-block pr-3 mb-1' src={vector} alt="" />Music Control</p>
                            </div>

                        </div>

                        {/* Right Side Two card  */}
                        <div className='lg:flex flex-col hidden lg:block gap-4'>
                            <div className='card shadow-lg bg-[#F4F4F4] p-[28px]'>
                                <h6 className=' font-bold text-[#F16A4F]'>EMI Available</h6>
                                <p className='pb-4'>EMI Available!
                                    EMI available on Online Payment over 5000BDT. Before order please contact us for product stock availability and updated price. </p>
                                <button className="p-[3px] rounded-lg bg-[#F16A4F] text-[#FFFFFF]">Learn More</button>
                            </div>
                            <div className='card shadow-lg bg-[#F4F4F4] p-[28px]'>
                                <div className='flex gap-5 '>
                                    <img className='h-10 w-6 mt-6' src={car} alt="" />
                                    <div className='text-[#404956]'>
                                        <h6 className='font-bold'>CountryWide Delivery</h6>
                                        <p>100% Genuine Product Money-back Guarantee</p>
                                    </div>
                                </div>
                                <hr className='border bg-black' />
                                <div className='flex gap-5 '>
                                    <img className='h-10 w-6 mt-6' src={protection} alt="" />
                                    <div className='text-[#404956]'>
                                        <h6 className='font-bold'>Buyer Protection</h6>
                                        <p>100% Genuine Product Money-back Guarantee</p>
                                    </div>
                                </div>
                                <hr className='border bg-black' />
                                <div className='flex gap-5 '>
                                    <img className='h-10 w-6 mt-6' src={payment} alt="" />
                                    <div className='text-[#404956]'>
                                        <h6 className='font-bold'>Payment Method</h6>
                                        <p>bKash/Online Payment Pay Cash on Delivery</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Button Group To Doing Action */}
                    <div className='pt-6 lg:flex gap-3'>
                        <button className="p-[10px] m-1 lg:m-0 rounded-lg bg-[#D9D9D9] text-black">Regular Price: <span className='text-[16px] font-sans font-bold'>BDT.134000</span></button>
                        <button className="p-[10px] m-1 lg:m-0 rounded-lg bg-[#F16A4F] text-[#FFFFFF]">Status: <span className='text-[16px] font-sans font-bold'>In Stock</span></button>
                        <button className="p-[10px] rounded-lg bg-[#D9D9D9] text-black">Product Code: <span className='text-[16px] font-sans font-bold'>Sku 2343</span></button>
                    </div>
                    <div className='pt-6 flex gap-3'>
                        <div className='flex gap-3 text-black'>
                            <button className='p-[10px] bg-[#D9D9D9] rounded-full text- font-bold'>-</button>
                            <h3 className='p-[10px] rounded-full font-bold'>1</h3>
                            <button className='p-[10px] bg-[#D9D9D9] rounded-full text- font-bold'>+</button>
                        </div>
                        <button className="p-[10px] rounded-lg bg-[#F16A4F] text-[#FFFFFF]">Buy Now</button>
                        <button className="p-[10px] rounded-lg bg-[#656262] text-[#FFFFFF]">Add To Cart</button>

                    </div>
                </div>
            </div>
            <div className='lg:flex text-center justify-center gap-4 lg:gap-16 pt-6 text-xl font-bold'>
                <p>Description</p>
                <p>Specification</p>
                <p>Reviews</p>
                <p>Videos</p>
            </div>

            {/* Right side */}
            <div className='flex m-2 flex-col block lg:hidden gap-4'>
                <div className='card shadow-lg bg-[#F4F4F4] p-[28px]'>
                    <h6 className=' font-bold text-[#F16A4F]'>EMI Available</h6>
                    <p className='pb-4'>EMI Available!
                        EMI available on Online Payment over 5000BDT. Before order please contact us for product stock availability and updated price. </p>
                    <button className="p-[3px] rounded-lg bg-[#F16A4F] text-[#FFFFFF]">Learn More</button>
                </div>
                <div className='card shadow-lg bg-[#F4F4F4] p-[28px]'>
                    <div className='flex gap-5 '>
                        <img className='h-10 w-6 mt-6' src={car} alt="" />
                        <div className='text-[#404956]'>
                            <h6 className='font-bold'>CountryWide Delivery</h6>
                            <p>100% Genuine Product Money-back Guarantee</p>
                        </div>
                    </div>
                    <hr className='border bg-black' />
                    <div className='flex gap-5 '>
                        <img className='h-10 w-6 mt-6' src={protection} alt="" />
                        <div className='text-[#404956]'>
                            <h6 className='font-bold'>Buyer Protection</h6>
                            <p>100% Genuine Product Money-back Guarantee</p>
                        </div>
                    </div>
                    <hr className='border bg-black' />
                    <div className='flex gap-5 '>
                        <img className='h-10 w-6 mt-6' src={payment} alt="" />
                        <div className='text-[#404956]'>
                            <h6 className='font-bold'>Payment Method</h6>
                            <p>bKash/Online Payment Pay Cash on Delivery</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;