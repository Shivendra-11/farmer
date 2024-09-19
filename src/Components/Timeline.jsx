import React from 'react';

const Timeline = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center   pb-12 py-60 ">
        <div className="flex flex-row space-x-8 relative">
          <ol className="flex flex-row items-start space-x-8">
            <li className="relative mb-10">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700 top-1/2 transform -translate-y-1/2 left-0"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
            <li className="relative mb-10">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700 top-1/2 transform -translate-y-1/2 left-0"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
              </p>
            </li>
            <li className="relative">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700 top-1/2 transform -translate-y-1/2 left-0"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
        <div className="absolute w-0.5 h-full bg-gray-200 dark:bg-gray-700 top-0 left-0 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Timeline;
