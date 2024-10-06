import React from 'react';

const Blog = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {/* Main content */}
      <div className="w-full lg:w-7/12 p-6 pl-10">
  <img
    src="/cmstvisual1.PNG"
    alt="10 ways CMST Simplifies Day-to-Day Operations"
    className="w-auto rounded-lg mb-6"
  />
  <p className="text-l font-bold text-black-500 mt-2 "><img
    src="/Capture.PNG"/>Sajeet Bajracharya</p>
  <h1 className="text-3xl font-bold leading-tight mb-6">
    10 Ways CMST Simplifies Day-to-Day Operations for Education Consultancies
  </h1>
  <p className="text-base text-black-700 leading-relaxed mb-6">
  Imagine a typical day at an education consultancy: meetings are lined up, client communications are nonstop, and there’s a mountain of paperwork waiting to be sorted. Now, imagine if you had a tool that could streamlin...
  </p>
</div>

      {/* Sidebar*/}
      <div className="w-full lg:w-4/12 p-6  rounded-lg">
        {/* First Blog Entry */}
        <div className="mb-8">
          <img
            src="/cmstcheck2.PNG"
            alt="CRM software"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-sm font-bold text-black-500 mt-2 "><img
    src="/Capture.PNG"/>Sajeet Bajracharya</h2>
          <h3 className="text-lg font-semibold leading-tight text-black mb-3">
            How to Use CRM Software to Nurture Leads in Educational Consultancy?
          </h3>
          <p className="text-sm text-gray-600">
            You’re an educational consultant juggling multiple client inquiries, attending college fairs,
            and preparing students...
          </p>
        </div>

        {/* Second Blog Entry */}
        <div className="mb-8">
          <img
            src="/cmstcheck3.jpg"
            alt="Mobile CRM"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-sm font-bold text-black-500 mt-2 "><img
    src="/Capture.PNG"/>Data Entry</h2>
          <h3 className="text-lg font-semibold leading-tight text-black mb-3">
            Why is Mobile CRM the Secret Weapon for Educational Consultancies?
          </h3>
          <p className="text-sm text-gray-600">
            In the fast-paced world of educational consultancy, staying connected and responsive to client
            needs is not just a goal...
          </p>
        </div>
      </div>

      {/* Latest Blog Section */}
      <div className="w-full p-6  mt-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Latest Blog</h2>

        {/* Blog Boxes */}
        <div className="flex flex-wrap -mx-2">
          {/* First Blog Post */}
          <div className="w-full sm:w-6/12 lg:w-3/12 px-2 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="/cmstcheck3.jpg"
                alt="Post 1"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-xl font-bold text-black-500 mt-2 "><img
                src="/Capture.PNG"/>Data entry</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Why is Mobile CRM the Secret Weapon for Educational Consultancies?
              </h3>
              <p className="text-sm text-gray-600">
                In the fast-paced world of educational consultancy, staying connected and responsive to client
                needs is crucial...
              </p>
              
            </div>
          </div>

          {/* Second Blog Post */}
          <div className="w-full sm:w-6/12 lg:w-3/12 px-2 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="/cmstcheck4.jpg"
                alt="Post 2"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-xl font-bold text-black-500 mt-2 "><img
                src="/Capture.PNG"/>Data entry</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                10 Productivity Boosting Features Every Education Consultancy Needs
              </h3>
              <p className="text-sm text-gray-600">
                As an education consultancy, your day-to-day operations involve juggling student needs, admissions...
              </p>
              
            </div>
          </div>

          {/* Third Blog Post */}
          <div className="w-full sm:w-6/12 lg:w-3/12 px-2 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="/cmstcheck5.jpg"
                alt="Post 3"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-xl font-bold text-black-500 mt-2 "><img
                src="/Capture.PNG"/>Data entry</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Choosing the Best CRM for Your Education Consultancy in 2024
              </h3>
              <p className="text-sm text-gray-600">
                Imagine nurturing student dreams while juggling countless tasks—let CRM help you streamline your consultancy...
              </p>
              
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Blog;
