import React, { useState } from 'react';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <img 
        src="./images/background.png" 
        alt="Background image of a field with farming equipment" 
        className="w-full h-screen object-cover" 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <header className="flex justify-between items-center p-6 max-w-[1800px] h-[131px] mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="./images/logo.png" 
              alt="Logo" 
              className="w-[190px] h-[81px]" 
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-5 text-white">
            <div className="relative p-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <div className="absolute inset-0 bg-transparent p-2 backdrop-blur-md rounded-full transition-all duration-300"></div>
            </div>
            <div className="relative p-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <div className="absolute inset-0 bg-transparent backdrop-blur-md p-2 rounded-full transition-all duration-300"></div>
            </div>
            <div className="relative p-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <div className="absolute inset-0 bg-transparent backdrop-blur-md rounded-full transition-all duration-300"></div>
            </div>
            <div className="relative p-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <div className="absolute inset-0 bg-transparent backdrop-blur-md rounded-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8 text-white">
            <a href="#" className="hover:underline">Home</a>

            {/* About Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#" className="flex items-center hover:underline">
                About
                <i className="fas fa-chevron-down ml-2 text-sm"></i>
              </a>

              {dropdownOpen && (
                <div 
                  className="absolute bg-white text-black mt-2 rounded shadow-lg z-10 w-"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Our Story</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Mission</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Team</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:underline">Benefits</a>
            <a href="#" className="hover:underline">Contact us</a>
            <a href="#" className="hover:underline">Download App</a>
          </nav>

          {/* Contact Info and Login/Register Button */}
          <div className="flex items-center space-x-24 pr-1">
            <button className="bg-transparent text-green-600 px-6 py-3 rounded-md border border-green-600 backdrop-blur-md transition-all duration-300 hover:text-white">
              Login / Register
            </button>
            <div className="text-white flex items-center space-x-3">
              <img src="./images/Link.png" alt="" className='w-10' />
              <div className='flex flex-col'>
                <p>Call Anytime</p>
                <span>+ 98 (000) - 9630</span>
              </div>
            </div>
          </div>
        </header>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-100 mt-0 mx-auto w-full" />

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mt-[140px] text-center text-white">
          <div className="py-3 leading-7">
            <h1 className="text-6xl font-bold">Empowering Farmers</h1>
            <h2 className="text-6xl font-bold text-yellow-500">Transforming Agriculture</h2>
            <img className="w-[50%] max-w-[421px] mt-3" src="./images/sign.png" alt="Signature" />

            <button className="mt-11 bg-green-600 text-white px-8 py-3 rounded-md border border-green-600 backdrop-blur-3xl transition-all duration-300 hover:text-white">
              Join the VFGA Movement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
