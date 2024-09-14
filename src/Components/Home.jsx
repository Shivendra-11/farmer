import React, { useState, useEffect } from 'react';


const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

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
        <header className="flex justify-between items-center p-6 md:p-8 lg:p-10 max-w-[1905px] h-[80px] md:h-[90px] lg:h-[100px] mx-auto shadow-gray-100">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="./images/logo.png" 
              alt="Logo" 
              className="w-[130px] md:w-[150px] lg:w-[190px] h-[50px] md:h-[60px] lg:h-[81px]" // Adjusted size for medium screens
            />
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="lg:hidden md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
            </button>
          </div>

          {/* Social Media Icons (Hidden on medium screens) */}
          <div className="hidden lg:flex md:flex justify-center items-center space-x-4 text-white">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-transparent rounded-full p-2">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-transparent rounded-full p-2">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-transparent rounded-full p-2">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-transparent rounded-full p-2">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>

          {/* Navigation Links (Hidden on mobile) */}
          <nav className="hidden lg:flex md:flex space-x-6 md:space-x-8 lg:space-x-9 text-white text-sm md:text-xs lg:text-base"> {/* Adjusted text size for medium screens */}
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
                  className="absolute bg-white text-black mt-2 rounded shadow-lg z-10"
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

          {/* Contact Info and Login/Register Button (Hidden on mobile) */}
          <div className="hidden lg:flex md:flex items-center space-x-3 md:space-x-12 lg:space-x-24 pr-1 text-sm md:text-xs lg:text-base">
            <button className="bg-transparent text-green-600 px-4 py-2 md:px-4 md:py-2 rounded-md border border-green-600 backdrop-blur-md transition-all duration-300 hover:text-white">
              Login / Register
            </button>
            {/* Remove call info for medium screens */}
            <div className="hidden md:flex text-white items-center space-x-2 md:space-x-3">
              <img src="./images/Link.png" alt="" className='w-8 md:w-8' />
              <div className='flex flex-col'>
                <p className="text-sm">Call Anytime</p>
                <span className="text-xs md:text-xs">+ 98 (000) - 9630</span>
              </div>
            </div>
          </div>
        </header>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-100 mt-0 mx-auto w-full" />

        {/* Small Screen Menu (Visible on mobile) */}
        <div
          className={`lg:hidden md:hidden fixed top-[80px] md:top-[90px] left-0 h-[calc(100vh-80px)] md:h-[calc(100vh-90px)] w-[400px] bg-white text-black p-6 z-20 space-y-10 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Prevent scrolling when the menu is open */}
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:underline" onClick={toggleMenu}>Home</a>
            <a href="#" className="hover:underline" onClick={toggleMenu}>About</a>
            <a href="#" className="hover:underline" onClick={toggleMenu}>Benefits</a>
            <a href="#" className="hover:underline" onClick={toggleMenu}>Contact us</a>
            <a href="#" className="hover:underline" onClick={toggleMenu}>Download App</a>
          </nav>

          {/* Login/Register and Contact Info */}
          <div className="flex flex-col space-y-2 ">
            <button className="bg-transparent text-green-600  w-[280px] py-3 rounded-md border border-green-600 transition-all duration-300" onClick={toggleMenu}>
              Login / Register
            </button>
            <div className="text-black flex items-center space-x-3">
              <img src="./images/Link.png" alt="" className='w-10' />
              <div className='flex flex-col md:hidden'>
                <p className="text-sm">Call Anytime</p>
                <span className="text-sm">+ 98 (000) - 9630</span>
              </div>
            </div>
          </div>

          {/* Social Media Icons at the bottom */}
          <div className="absolute bottom-6 inset-x-0 text-black flex justify-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-transparent rounded-full p-3">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-transparent rounded-full p-3">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-transparent rounded-full p-3">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-transparent rounded-full p-3">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mt-[140px] text-center text-white">
          <div className="py-7 leading-7">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Empowering Farmers</h1>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-500">Transforming Agriculture</h2>
            <img className="w-[60%] md:w-[55%] lg:w-[50%] max-w-[421px] mt-3" src="./images/sign.png" alt="Signature" />

            <button className="mt-9 bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md border border-green-600 backdrop-blur-3xl transition-all duration-300 hover:text-white">
              Join the VFGA Movement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;