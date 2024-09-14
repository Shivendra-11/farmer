import React from 'react';

const Verticalscroll = () => {
  return (
    <div className="bg-[#F8F7F0] mt-14 font-sans min-h-screen relative">
      {/* Heading and Paragraph Container */}
      <div className="text-center py-20 text-3xl">
        <p className="text-green-500 mb-4">How it Works</p>
        <h1 className="text-4xl font-bold">A Simplified Process For Farmers and Investors</h1>
      </div>

      {/* Card Container */}
      <div className="w-[90%] mx-auto my-0 relative z-10">
        <ul
          className="grid grid-cols-1 grid-rows-[repeat(4,70vh)] gap-[4vw] pb-[calc(4*_1.5em)] mb-[4vw] pl-0"
          id="cards"
        >
          {/* Card 1 */}
          <li id="card1" className="card sticky pt-[calc(1*1.5em)] top-0">
            <div className="box-border shadow-[0_0_30px_0_rgba(0,0,0,0.3)] lg:h-[70vh] lg:w-[900px] sm:w-[65vw] sm:h-[50vh] flex justify-center items-center transition-all duration-500 rounded-[40px] mx-auto relative">
              <img
                src="./images/vertical1.png"
                alt="Card 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="text-[2em] text-white absolute top-5 left-5">Card 1</h2>
            </div>
          </li>

          {/* Card 2 */}
          <li id="card2" className="card sticky pt-[calc(2*1.5em)] top-0">
            <div className="box-border shadow-[0_0_30px_0_rgba(0,0,0,0.3)] lg:h-[70vh] lg:w-[900px] sm:w-[65vw] sm:h-[50vh] flex justify-center items-center transition-all duration-500 rounded-[40px] mx-auto relative">
              <img
                src="./images/vertical2.png"
                alt="Card 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="text-[2em] text-white absolute top-5 left-5">Card 2</h2>
            </div>
          </li>

          {/* Card 3 */}
          <li id="card3" className="card sticky pt-[calc(3*1.5em)] top-0">
            <div className="box-border shadow-[0_0_30px_0_rgba(0,0,0,0.3)] lg:h-[70vh] lg:w-[900px] sm:w-[65vw] sm:h-[50vh] flex justify-center items-center transition-all duration-500 rounded-[40px] mx-auto relative">
              <img
                src="./images/vertical3.png"
                alt="Card 3"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="text-[2em] text-white absolute top-5 left-5">Card 3</h2>
            </div>
          </li>

          {/* Card 4 */}
          <li id="card4" className="card sticky pt-[calc(4*1.5em)] top-0">
            <div className="box-border shadow-[0_0_30px_0_rgba(0,0,0,0.3)] lg:h-[70vh] lg:w-[900px] sm:w-[65vw] sm:h-[50vh] flex justify-center items-center transition-all duration-500 rounded-[40px] mx-auto relative">
              <img
                src="./images/vertical5.png"
                alt="Card 4"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="text-[2em] text-white absolute top-5 left-5">Card 4</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Verticalscroll;
