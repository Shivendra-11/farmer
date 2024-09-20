import React, { useState } from 'react';

// FaqItem component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md">
      <div
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <i
          className={`fas fa-chevron-${isOpen ? "up" : "right"} text-yellow-500`}
        ></i>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-200">{answer}</div>
      )}
    </div>
  );
};

// Faq component
const Faq = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white">
      {/* Image section */}
      <div className="relative p-8 md:w-[60%] flex flex-col items-center">
        {/* Green Image */}
        <div className="relative right-5 w-full h-[690px]">
          <img
            src="./images/greenimg.png"
            alt="Green Vegetables"
            className="absolute left-0 w-[65%] h-[600px] object-cover"
          />
          {/* Overlapping Image */}
          <img
            src="./images/upper.png"
            alt="Person holding vegetables"
            className="absolute top-20 left-72 w-[50%] h-[60%] object-cover z-10"
          />
          {/* Green Button */}
          <button className="absolute top-[calc(20%+58%)] left-[33rem] bg-green-500 text-white font-bold py-3 px-6 rounded transition duration-300 hover:bg-green-600 z-20">
           Read More
          </button>

        </div>
      </div>

      {/* FAQ section */}
      <div className=  "  p-12 md:w-1/2">
        <h2 className="text-yellow-500 text-lg">Frequently Asked Questions</h2>
        <h1 className="text-3xl font-bold mt-2">You've Any Questions?</h1>
        <div className="mt-2 space-y-8">
          <FaqItem
            question="What is Soch Global VFGA?"
            answer="Soch Global VFGA is a platform for virtual farming and gardening activities."
          />
          <FaqItem
            question="How do I create a VFGA?"
            answer="To create a VFGA, you need to estimate your future crop yield and list it on the Soch Global platform."
          />
          <FaqItem
            question="How does the maturity date work?"
            answer="The maturity date is the estimated time when your crops will be ready for harvest."
          />
          <FaqItem
            question="How can I invest in VFGAs?"
            answer="You can invest in VFGAs by purchasing shares on the Soch Global platform."
          />
        </div>
      </div>
    </div>
  );
};

// Main Component (formerly App)
const SustainableAgriculture = () => {
  return (
    <div>
      {/* FAQ Section */}
      <Faq />

      {/* Text Section - Added right after the FAQ section with reduced margin */}
      <div className="flex justify-center items-center mt-6 pl-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            {/* Left Column */}
            <div className="md:w-1/2">
              <p className="text-yellow-500 text-sm font-bold mb-2">JOIN THE VFGA MOVEMENT</p>
              <h1 className="text-4xl font-bold text-black leading-tight mb-4">
                Lead the Way in <br /> Sustainable Agriculture
              </h1>
            </div>
            {/* Right Column */}
            <div className="md:w-1/2">
              <p className="text-gray-700 text-base">
                Join the forefront of agricultural innovation by becoming a part of Soch Global VFGA. 
                As a pioneer, you'll contribute to a more equitable and sustainable food system while 
                unlocking new opportunities for growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting Faq separately
export { Faq };
export default SustainableAgriculture;
