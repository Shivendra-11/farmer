import React from 'react';

const Projects = () => {
    return (
        <div className="container mx-auto max-w-[70%] px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-8">
                <p className="text-sm text-green-500 mb-2">UPCOMING PROJECTS</p>
                <h1 className='text-4xl font-bold text-black'>Projects Section</h1>
            </div>
            
            {/* Subheading and Grid */}
            <div className="mt-16 mb-10"> {/* Added bottom margin here */}
                <div className="grid grid-cols-3 gap-6">
                    {/* First row (2 divs on top) */}
                    <div className="col-span-1">
                        <div className="w-full h-80 bg-yellow-200 flex items-center justify-center text-center">
                            <div>
                                <h3 className="text-sm">FARMER EMPOWERMENT</h3>
                                <p className="text-lg font-bold">Building Resilient Communities</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="w-full h-80 bg-green-200 flex items-center justify-center text-center">
                            <div>
                                <h3 className="text-sm">SUSTAINABLE HORTICULTURE</h3>
                                <p className="text-lg font-bold">Greener Farming Practices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10"> {/* Added bottom margin here */}
                {/* Second row (3 divs in table form) */}
                <div className="col-span-1">
                    <div className="w-full h-80 bg-blue-200 flex items-center justify-center text-center">
                        <div>
                            <h3 className="text-sm">MECHANIZED FARMING</h3>
                            <p className="text-lg font-bold">Modernizing Agriculture</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full h-80 bg-red-200 flex items-center justify-center text-center">
                        <div>
                            <h3 className="text-sm">GRAIN PRODUCTION</h3>
                            <p className="text-lg font-bold">Boosting Food Security</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full h-80 bg-purple-200 flex items-center justify-center text-center">
                        <div>
                            <h3 className="text-sm">LIVESTOCK ENRICHMENT</h3>
                            <p className="text-lg font-bold">Boosting Farmer Income</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
