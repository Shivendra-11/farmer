import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterest, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            {/* Main Footer Section */}
            <div className="bg-custom-gray text-gray-300 py-12">
                <div className="container mx-auto max-w-[75%]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo section */}
                        <div className="footer-section flex flex-col">
                            <div className="bg-white p-1 rounded-lg inline-block">
                                <img alt="Soach logo" className='w-32' src="./images/logo.png" />
                            </div>
                            <p className="mt-2 mb-4">
                                There are many variations of passages of lorem ipsum available, but the majority suffered.
                            </p>
                            <div className="flex space-x-3">
                                <a href="#" className="text-gray-300 hover:text-green-500"><FaTwitter /></a>
                                <a href="#" className="text-gray-300 hover:text-green-500"><FaFacebookF /></a>
                                <a href="#" className="text-gray-300 hover:text-green-500"><FaPinterest /></a>
                                <a href="#" className="text-gray-300 hover:text-green-500"><FaInstagram /></a>
                            </div>
                        </div>

                        {/* Explore section with icon */}
                        <div className="footer-section flex flex-col px-14">
                            <h3 className="text-lg font-semibold mb-1 relative flex items-center">
                                Explore
                                <span className="absolute left-0 bottom-[-5px] block w-5 h-0.5 bg-green-500"></span>
                            </h3>
                            <ul className='py-2'>
                                {['About', 'Services', 'Our Projects', 'Meet the Farmers', 'Latest News', 'Contact'].map(item => (
                                    <li className="flex items-center" key={item}>
                                        <img src="./images/leaf.png" alt="Icon" className="w-4 h-4 mr-2" />
                                        <a href="#" className="hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* News section */}
                        <div className="footer-section flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 relative">
                                News
                                <span className="absolute left-0 bottom-[-5px] block w-5 h-0.5 bg-green-500"></span>
                            </h3>
                            <div className="space-y-2">
                                <div className="footer-news-item">
                                    <a href="#" className="font-bold hover:underline">Bringing Food Production Back To Cities</a>
                                    <span className="block text-green-500 text-sm">July 5, 2022</span>
                                </div>
                                <div className="footer-news-item">
                                    <a href="#" className="font-bold hover:underline">The Future of Farming, Smart Irrigation Solutions</a>
                                    <span className="block text-green-500 text-sm">July 5, 2022</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact section */}
                        <div className="footer-section flex flex-col px-16">
                            <h3 className="text-lg font-semibold mb-3 relative">
                                Contact
                                <span className="absolute left-0 bottom-[-5px] block w-5 h-0.5 bg-green-500"></span>
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <FaPhoneAlt className="mr-2" />
                                    <a href="tel:6668880000" className="hover:underline">666 888 0000</a>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    <a href="mailto:needhelp@soachglobal.com" className="hover:underline">needhelp@soachglobal.com</a>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2" />
                                    613/P-58 Sant Kabir Nagar, New Delhi
                                </div>
                                <div className="flex mt-4">
                                    <input placeholder="Your Email Address" type="email" className="p-2 rounded-l-md border-none outline-none" />
                                    <button className="bg-green-500 text-gray-900 p-2 rounded-r-md flex items-center">
                                        <FaPaperPlane />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-custom-back text-gray-400 border-t">
                <div className="text-center flex flex-col md:flex-row justify-between px-52 py-6 mt-6">
                    <p>© All Copyright 2024 by Shawonetc Themes</p>
                    <div>
                        <a href="#" className="hover:underline">Terms of Use</a> | 
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
