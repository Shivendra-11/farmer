import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

const Innovation = () => {
    return (
        <div className="text-center py-24 pb-32">
            <h2 className="text-yellow-500 text-sm">AWARDS & RECOGNITION</h2>
            <h1 className="text-3xl font-bold mt-2">Honored for Innovation and Impact</h1>

            <div className="flex justify-center py-8 mt-16 space-x-32">
                {/* First Award */}
                <div className="shadow-lg rounded-lg overflow-hidden w-72 h-80 relative">
                    <div className="p-4  ">
                        <img 
                            src="./images/news.png" 
                            alt="Asia Business Outlook magazine cover with a person and article" 
                            className="w-full  pr-6 h-full object-cover rounded-lg" 
                        />
                    </div>
                    {/* Corner div for share button and text */}
                    <div className="absolute bottom-1 right-2  bg-white p-2 rounded-lg z-10 flex items-center space-x-5 shadow-md">
                        <button className="bg-green-500  text-white rounded-full p-2">
                            <FaShareAlt />
                        </button>
                        <div>
                            <h3 className="text-sm font-semibold">Asia Business Outlook</h3>
                            <p className="text-xs text-gray-600">ANUBHAV DAYAL</p>
                        </div>
                    </div>
                </div>

                {/* Second Award */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 h-80 relative">
                    <div className="p-4">
                        <img 
                            src="./images/news2.png" 
                            alt="Virtual Food Grain Asset and grains" 
                            className="w-full h-full object-cover rounded-lg" 
                        />
                    </div>
                    {/* Corner div for share button and text */}
                    <div className="absolute bottom-1 right-2 bg-white p-2 rounded-lg z-10 flex items-center space-x-2 shadow-md">
                        <button className="bg-green-500 text-white rounded-full p-2">
                            <FaShareAlt />
                        </button>
                        <div>
                            <h3 className="text-sm font-semibold">VFGA</h3>
                            <p className="text-xs text-gray-600">Virtual Food Grain Asset</p>
                        </div>
                    </div>
                </div>

                {/* Coming Soon */}
                <div className="bg-yellow-100 shadow-lg rounded-lg w-72 h-80 flex items-center justify-center relative">
                    {/* Corner div for share button and text */}
                    <div className="absolute bottom-1 right-1 bg-white p-2 rounded-lg z-10 flex items-center space-x-2 shadow-md">
                        <button className="bg-green-500 text-white rounded-full p-2">
                            <FaShareAlt />
                        </button>
                        <div>
                            <h3 className="text-sm font-semibold">Coming Soon</h3>
                        </div>
                    </div>
                    <h3 className="text-sm font-semibold">Coming Soon</h3>
                </div>
            </div>
        </div>
    );
}

export default Innovation;
