import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Navigation/Header/Header";
import { MoreDetail } from "../Stepper/MoreDetail";
import { Registration } from "../Stepper/Registration";
import { SecureAccount } from "../Stepper/SecureAccount";
import Stepper from "../Stepper/Stepper";
import { VerifyCode } from "../Stepper/VerifyCode";

function Register() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["1", "2", "3", "4"];

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <Registration />;
      case 2:
        return <VerifyCode />;
      case 3:
        return <SecureAccount />;
      case 4:
        return <MoreDetail />;
      default:
    }
  };
  return (
    <div className="intro">
      <Header />
      <section className="text-gray-600 flex justify-center items-center body-font relative">
        <div>
          <Stepper steps={steps} currentStep={currentStep} />
          <form className="p-10 bg-white">
            <h1 className="title-font text-3xl font-bold mb-2">Register</h1>
            <p className="mb-7 text-base">
              Enter your mobile number to continue.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="number"
                className="leading-7 text-sm text-gray-600"
              >
                Mobile Number
              </label>
              <br />
              <input
                className="p-1.5 mb-7 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
              />
              <br />
              <button className="mb-5 p-1.5 w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Continue
              </button>
              <p>
                Already have an account?
                <a
                  className="cursor-pointer text-red-500"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
