import React from "react";
import { Header } from "../../../components/Navigation/Header/Header";

function Intro() {
  let Logo = require("../../../assets/images/Group.png");

  return (
    <section className="text-gray-600 font-body intro">
      <Header/>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Taking Trucking Industry
            <br className="hidden lg:inline-block" />
            to Digital Platform
          </h1>
          <p className="mb-8 leading-relaxed">
            LoadNepal begins a new journey for the digital platform by
            onboarding the trucking industry into the internet, making it easier
            for both shippers and carriers.
          </p>
          <div className="flex justify-center">
            <button className="ml-4 inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              Learn More
            </button>
          </div>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={Logo}
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
