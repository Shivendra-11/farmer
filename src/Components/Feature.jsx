import React from 'react';

const Feature = () => {
    return (
        <div className="flex w-full justify-center mt-12 bg-gray-100 items-center min-h-screen">
            <div className="mx-auto py-11 max-w-[59rem] flex flex-col md:flex-row">
                {/* Left Section with Image and Testimonial */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-6">
                    <img
                        src="./images/Feature.png"
                        alt="A combine harvester working in a golden wheat field during sunset"
                        className="rounded-lg shadow-md w-[290px] md:w-[390px]"
                    />
                    {/* Add gap between image and testimonial */}
                    <div className="mt-4 p-3 bg-white rounded-lg shadow-md flex items-center max-w-[400px]">
                        <div className="bg-green-500 rounded-md p-2"> {/* Green background with rounded corners */}
                            <div className="text-white text-xl md:text-2xl">
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base ml-2"> {/* Adjusted margin */}
                            "VFGA has been a lifeline for our smallholder farmers, providing them with the resources they need to thrive."
                        </p>
                    </div>
                </div>

                {/* Right Section with Content */}
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-yellow-500 text-md md:text-lg font-bold">WHY CHOOSE US</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Empowering Farmers,
                        <br />
                        Transforming Markets
                    </h1>
                    <p className="text-gray-700 mt-4 text-sm md:text-base">
                        Soch Global VFGA is more than just a platform; it's a catalyst for positive change in the agricultural sector. By connecting farmers directly with consumers, we're creating a more equitable and sustainable food system. Our innovative approach empowers farmers, enhances market access, and promotes sustainable practices.
                    </p>

                    {/* Key Features */}
                    <div className="mt-6">
                        <div className="flex items-start mt-4">
                            <div className="text-green-500 text-xl md:text-2xl mr-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="text-md md:text-lg font-bold text-gray-900">
                                    Enhanced Financial Inclusion
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base">
                                    VFGAs provide farmers with access to immediate financing, reducing their reliance on traditional lenders that often come with high interest rates and stringent collateral requirements.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start mt-4">
                            <div className="text-green-500 text-xl md:text-2xl mr-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="text-md md:text-lg font-bold text-gray-900">
                                    Sustainable Agriculture
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base">
                                    By promoting sustainable farming practices, VFGAs contribute to environmental conservation and long-term agricultural productivity.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start mt-4">
                            <div className="text-green-500 text-xl md:text-2xl mr-4">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="text-md md:text-lg font-bold text-gray-900">
                                    Market Access
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base">
                                    VFGAs provide farmers with better access to markets, allowing them to reach a wider audience and secure better prices for their produce.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
