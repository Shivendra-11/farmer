import React from 'react';

const Info = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <img 
                src="./images/bg.png" 
                alt="Background Image" 
                className="absolute inset-0 w-full h-full object-cover z-[1]" 
            />
            
            <div 
                className="relative flex flex-col md:flex-row items-center py-32 justify-between bg-white bg-opacity-80 max-w-[1000px] mx-auto space-y-8 md:space-y-0 md:space-x-12 rounded-lg transition-all duration-500 z-[2]" 
            >
                <div className="md:w-1/2 flex flex-col justify-between min-h-[300px] p-4">
                    <div>
                        <h2 className="text-yellow-500 text-sm font-bold">REVOLUTIONIZING A FINANCE</h2>
                        <h1 className="text-4xl font-bold mt-2">Introducing Virtual Food Grain Assets (VFGAs)</h1>
                        <p className="text-gray-700 mt-4">
    Soch Global is revolutionizing agricultural finance With Virtual Food Grain Assets (VFGAs), enabling farmers to access capital without the high interest rates and strict collateral demands of traditional loans.
</p>
                            Soch Global is revolutionizing agriculturalfinance With Virtual Food Grain Assets (VFGAs), enabling farmers to access capital without the high interest rates and strict collateral demands of traditional loans.
                        <h3 className="text-yellow-500 text-sm font-bold mt-6">BENEFITS FOR FARMERS</h3>
                        <div className="flex flex-wrap gap-5 mt-4">
                            <span className="text-green-700 px-4 py-2 border-2 bg-green-100 rounded-full  border-green-500  transition-all duration-300">Financial Benefits</span>
                            <span className="text-green-700 px-4 py-2  border-2 rounded-full bg-green-100  border-green-500 transition-all duration-300">Risk Management</span>
                            <span className="text-green-700 px-8 py-2  border-2 rounded-full  border-green-500 bg-green-100 transition-all duration-300">Sustainability</span>
                            <span className="text-green-700 px-7 py-2  border-2 rounded-full  border-green-500 transition-all bg-green-100 duration-300">Empowerment</span>
                        </div>
                        <button className="bg-green-600 text-white px-6 py-3 rounded-full mt-6 transition-all duration-300 hover:bg-green-700">Discover More</button>
                    </div>
                    <div className="hidden md:block h-16"></div>
                </div>
                <div className="md:w-1/2 flex flex-col items-center justify-between min-h-[388px]">
                    <div className="flex flex-col md:flex-row items-center gap-x-2">
                        <div className="flex flex-col">
                            <img src="./images/smallbg.png" alt="Farmer working in a field" className="rounded-lg shadow-lg w-[300px] h-[410px] object-cover transition-all duration-500 border border-light-green-300" />
                            <div className="text-center mt-4">
                                <h2 className="text-4xl font-bold">20K+</h2>
                                <p className="text-green-600">PARTNERS WORLDWIDE</p>
                            </div>
                        </div>
                        <img 
                            src="./images/bigimg.png" 
                            alt="Tractor in a field" 
                            className="rounded-tr-[3rem] shadow-lg w-[250px] h-[500px] object-cover transition-all duration-500 border border-light-green-300" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
