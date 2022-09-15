import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Navigation/Header/Header";
import * as Yup from "yup";
import TextField from "../TextField";


const Form_validation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Name must be atleat 6 character long.")
    .required(" Password is Required"),
});



export const Login = () => {
  let Logo = require("../../assets/images/loginImage.png");
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-24 mx-auto flex gap-10 justify-center sm:flex-nowrap flex-wrap">
          <img src={Logo} alt="" />
          <div className="">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Form_validation}
              onSubmit={() => navigate("/dashboard")}
            >
              {({ isValid, isSubmitting, errors }) => (
                <Form>
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Login
                  </h2>

                
                  <div className="relative mb-4">
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  </div>
                  <div className="relative mb-4">
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                  </div>
                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
