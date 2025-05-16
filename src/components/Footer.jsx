import React from 'react'
import logo from '../assets/Logo-icon.png';

export const Footer = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-xl mx-auto bg-[#263238] py-16'>
            <div className="text-white">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Logo + thông tin bản quyền */}
                    <div className="lg:w-1/3 w-full">
                        <a href="#" className="text-2xl font-semibold flex items-center space-x-3 mb-8">
                            <img src={logo} alt="logo" className="w-10" />
                            <span>NEXCENT</span>
                        </a>
                        <h4 className="mb-1">Copyright © 2020 Nexcent ltd.</h4>
                        <p>All rights reserved</p>
                        <div className='mt-12 flex gap-6'>
                            <i class="fa-brands fa-instagram text-2xl"></i>
                            <i class="fa-brands fa-internet-explorer text-2xl"></i>
                            <i class="fa-brands fa-square-twitter text-2xl"></i>
                            <i class="fa-brands fa-square-youtube text-2xl"></i>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:w-2/3 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Company */}
                            <div>
                                <h3 className="font-bold mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">About us</a></li>
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                    <li><a href="#" className="hover:underline">Contact us</a></li>
                                    <li><a href="#" className="hover:underline">Pricing</a></li>
                                    <li><a href="#" className="hover:underline">Testimonials</a></li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="font-bold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">Help center</a></li>
                                    <li><a href="#" className="hover:underline">Terms of service</a></li>
                                    <li><a href="#" className="hover:underline">Legal</a></li>
                                    <li><a href="#" className="hover:underline">Privacy policy</a></li>
                                    <li><a href="#" className="hover:underline">Status</a></li>
                                </ul>
                            </div>

                            {/* Subscribe */}
                            <div>
                                <h3 className="font-bold mb-4">Stay up to date</h3>
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full pr-10 pl-4 py-2 rounded bg-gray-200 text-black placeholder-gray-500 focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2"
                                    >
                                        <i className="fa-solid fa-location-arrow text-xl text-gray-500"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
