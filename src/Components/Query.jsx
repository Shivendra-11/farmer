import React from 'react';

const Query = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            {/* Reduced the overall width to 2/3 */}
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full md:w-2/3 h-auto" style={{ height: '460px' }}>
                {/* Map container with smaller width */}
                <div className="w-full md:w-2/5" style={{ height: '100%' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.678492162073!2d-0.119543684229792!3d51.50332457963556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf0f0b0b1%3A0x2b0b0b0b0b0b!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1633021234567!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>

                {/* Message div with background image and color */}
                <div
                    className="relative w-full md:w-3/5 p-8 flex flex-col justify-center"
                    style={{ backgroundColor: '#F8F7F0', height: '100%' }}
                >
                    {/* Background image using img tag */}
                    <img
                        src="./images/querybg.png"
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    
                    {/* Content over the background image */}
                    <div className="relative z-10">
                        <h2 className="text-sm font-bold">CONTACT US</h2>
                        <h1 className="text-3xl font-bold mb-4">Write a Message</h1>
                        <form className="space-y-4">
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <input type="text" placeholder="Name" className="w-full md:w-1/2 p-2 border border-gray-300 rounded" />
                                <input type="email" placeholder="Email Address" className="w-full md:w-1/2 p-2 border border-gray-300 rounded" />
                            </div>
                            <textarea placeholder="Write a Message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
                            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send a Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Query;
