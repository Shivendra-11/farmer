import React from 'react';

const Projects = () => {
    return (
        <div className="container mx-auto max-w-[70%] px-4 py-24">
            {/* Header Section */}
            <div className="text-center mb-8">
                <p className="text-sm text-green-500 mb-2">UPCOMING PROJECTS</p>
                <h1 className='text-4xl font-bold text-black'>Projects Section</h1>
            </div>

            {/* Subheading and Grid */}
            <div className="mt-16 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First row (2 images on top) */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="w-full h-80 relative">
                            <img
                                src="./images/p1.png"
                                alt="Farmer Empowerment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <div className="w-full h-80 relative">
                            <img
                                src="./images/p2.png"
                                alt="Sustainable Horticulture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Second row (3 images) */}
                <div className="col-span-1">
                    <div className="w-full h-80 relative">
                        <img
                            src="./images/p3.png"
                            alt="Mechanized Farming"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full h-80 relative">
                        <img
                            src="./images/p4.png"
                            alt="Grain Production"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full h-80 relative">
                        <img
                            src="./images/p5.png"
                            alt="Livestock Enrichment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
