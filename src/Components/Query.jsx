import React from 'react'

const Query = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full md:w-3/4 h-auto md:h-96">
                <div className="w-full md:w-1/2 h-64 md:h-full mb-4 md:mb-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.678492162073!2d-0.119543684229792!3d51.50332457963556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf0f0b0b1%3A0x2b0b0b0b0b0b0b!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1633021234567!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
                <div className="w-full md:w-1/2 p-8 bg-[#fdf6e3] flex flex-col justify-center bg-cream">
                    <h2 className="text-yellow-600 text-sm font-bold">CONTACT US</h2>
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
    );
}


export default Query
