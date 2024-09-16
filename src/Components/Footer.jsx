import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterest, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="footer-section">
                        <img alt="Soach logo" className="max-w-xs" src="https://placehold.co/150x50" />
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
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-3 relative">
                            Explore
                            <span className="absolute left-0 bottom-[-5px] block w-5 h-0.5 bg-green-500"></span>
                        </h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Our Projects</a></li>
                            <li><a href="#" className="hover:underline">Meet the Farmers</a></li>
                            <li><a href="#" className="hover:underline">Latest News</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
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
                    <div className="footer-section">
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
                                613/P-58 sant kabir nagar, New Delhi
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
            <div className="text-center py-4 border-t border-gray-700 mt-8">
                <p>© All Copyright 2024 by shawonetc Themes</p>
                <div className="mt-2">
                    <a href="#" className="hover:underline">Terms of Use</a> |
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
