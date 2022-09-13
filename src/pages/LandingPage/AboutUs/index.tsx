import React from "react";
// import '../../../assets/images/aboutus.png'

function index() {
  let Logo = require("../../../assets/images/aboutus.png");

  return (
    <section id='about' className="text-gray-600 body-font about-us">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 about__image flex justify-end">
          <img
            className="object-cover object-center rounded  "
            alt="hero"
            src={Logo}
          />
          <div className="bg-blue-700 text-white">Moving Nepal Smoothly</div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Us
          </h1>
          <p className="mb-8 leading-relaxed">
            We are a tech company motivated to build the most efficient system
            to help humanity to build a better society and culture. Our mission
            is to create an ecosystem where trucks can easily connect to their
            loads, and shippers can experience the reliable and professional
            service from their carriers. Though we are only targeting full truck
            load at the beginning, we will be launching a full-fledged one stop
            logistic platform soon.
          </p>
          <div className="">
            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Vision
            </h3> 
            <p className="mb-8 leading-relaxed">

              We aspire to unite Nepal by creating a collaborative and
              harmonious network where stakeholders will work together to build
              a sector which, contrary to its present-day state, will be known
              for its safety, reliability, transparency, precision and the
              ability to create value for our shippers and carriers. <br /> The
              core of whatever is done at LoadNepal is rooted strongly in this
              wider purpose. While we started with a mission to make logistics
              simpler, we are driven by the opportunity to make Nepal’s
              logistics partners and services world-class through data and
              technology while also building the country’s most inspirational
              place to work at.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
