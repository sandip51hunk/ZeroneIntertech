import React from "react";
import MainLayout from "../../../container/dashboardLayout";

function Support() {
  return (
    <MainLayout>
      <section className="text-gray-600 body-font">
        <div className="container p-2">
          <div className="flex flex-wrap -m-4 p-8 ">
            <div className="p-4 mx-4   bg-white">
              <div className="h-full  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Customer SUpport
                </h1>
                <p className="leading-relaxed mb-3">
                 Phone Number: 9860112638
                </p>
                <p className="leading-relaxed mb-3">
                 Email: sabin007.maharjan@gmail.com
                </p>
                <p className="leading-relaxed mb-3">
               what app viber 
                </p>
              
               
              </div>
            </div>
            <div className="p-4 mx-4   bg-white">
              <div className="h-full  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Shipper SUpport
                </h1>
                <p className="leading-relaxed mb-3">
                 Phone Number: 9860112638
                </p>
                <p className="leading-relaxed mb-3">
                 Email: sabin007.maharjan@gmail.com
                </p>
                <p className="leading-relaxed mb-3">
               what app viber 
                </p>
              
               
              </div>
            </div>
            <div className="p-4 mx-4   bg-white">
              <div className="h-full  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Driver SUpport
                </h1>
                <p className="leading-relaxed mb-3">
                 Phone Number: 9860112638
                </p>
                <p className="leading-relaxed mb-3">
                 Email: sabin007.maharjan@gmail.com
                </p>
                <p className="leading-relaxed mb-3">
               what app viber 
                </p>
              
               
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <div className="w-1/2 p-8">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
           Contact us
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Dispute Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send Message
          </button>
        </div>
    </MainLayout>
  );
}

export default Support;
