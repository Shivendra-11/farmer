import React from 'react'

const Feature = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-4/5 max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
            {/* Left Section with Image and Testimonial */}
            <div className="w-full md:w-1/2 p-4 mt-8">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-21EZDPpvbUvVn0O9nBJucsQu.png"
                alt="A combine harvester working in a golden wheat field during sunset"
                className="rounded-lg shadow-md"
                width="700"
                height="600"
              />
              <div className="mt-4 p-4 bg-white rounded-lg shadow-md flex items-center">
                <div className="text-yellow-500 text-2xl mr-4">
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700">
                  "VFGA has been a lifeline for our smallholder farmers, providing them with the resources they need to thrive."
                </p>
              </div>
            </div>
    
            {/* Right Section with Content */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-yellow-500 text-lg font-bold">WHY CHOOSE US</h2>
              <h1 className="text-4xl font-bold text-gray-900 mt-2">
                Empowering Farmers,
                <br />
                Transforming Markets
              </h1>
              <p className="text-gray-700 mt-4">
                Soch Global VFGA is more than just a platform; it's a catalyst for positive change in the agricultural sector. By connecting farmers directly with consumers, we're creating a more equitable and sustainable food system. Our innovative approach empowers farmers, enhances market access, and promotes sustainable practices.
              </p>
    
              {/* Key Features */}
              <div className="mt-6">
                <div className="flex items-start mt-4">
                  <div className="text-green-500 text-2xl mr-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Enhanced Financial Inclusion
                    </h3>
                    <p className="text-gray-700">
                      VFGAs provide farmers with access to immediate financing, reducing their reliance on traditional lenders that often come with high interest rates and stringent collateral requirements.
                    </p>
                  </div>
                </div>
    
                <div className="flex items-start mt-4">
                  <div className="text-green-500 text-2xl mr-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Sustainable Agriculture
                    </h3>
                    <p className="text-gray-700">
                      By promoting sustainable farming practices, VFGAs contribute to environmental conservation and long-term agricultural productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default Feature;
