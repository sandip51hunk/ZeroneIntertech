import React from "react";

function Network() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            All Nepal Network
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our platform can be accessed and used anywhere in Nepal, which can
              be leveraged by our customers to ship goods to their destination.
          </p>
        </div>
        <div className="container  px-5  mx-auto">
    <div className="flex flex-wrap justify-center  -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Industrial Partner</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p className="leading-relaxed">Driver Partner</p>
      </div>
      </div>
      </div>
        <div className="flex justify-center my-8  w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default Network;
