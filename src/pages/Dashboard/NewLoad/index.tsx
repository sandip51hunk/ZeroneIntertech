import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
// import { SeachableDropDown } from "../../../components/SearchableDropdown";
import TextField from "../../../components/TextField";
import MainLayout from "../../../container/dashboardLayout";
import * as Yup from "yup";
import Select from "react-select";
import { RiErrorWarningFill } from "react-icons/ri";

const Form_validation = Yup.object().shape({
  name: Yup.string().required("name is Required"),
  address: Yup.string().required("address is Required"),
  loadingPoint: Yup.string().required("loadingPoint is Required"),
  unloadingPoint: Yup.string().required("unloadingPoint is Required"),
  loadingTime: Yup.string().required("loadingTime is Required"),
  contactNumber: Yup.string().required("contactNumber is Required"),
  payment: Yup.string().required("payment is Required"),
  truckBody: Yup.string().required("truckBody is Required"),
  truckFeet: Yup.string().required("truckFeet is Required"),
  goodTransport: Yup.string().required("goodTransport is Required"),
  additionalInfo: Yup.string().required("additionalInfo is Required"),
  proposedRate: Yup.string().required("proposedRate is Required"),
  contactName: Yup.string().required("contactName is Required"),
  password: Yup.string()
    .min(6, "Name must be atleat 6 character long.")
    .required(" Password is Required"),
});
function NewLoad() {
  const [selectedOption, setSelectedOption] = useState<any>("");
  const counterList = [
    {
      label: "sabin",
      value: "100",
    },
    {
      label: "anish",
      value: "100",
    },
  ];
  const initVal = {
    loadingPoint: "",
    loadingTime: "",
    unloadingPoint: "",
    contactNumber: "",
    contactName: "",
    truckBody: "",
    truckCapacity: "",
    truckFeet: "",
    truckNumber: "",
    goodTransport: "",
    additionalInfo: "",
    approximateWeight: "",
    proposedRate: "",
    paymentMethod: "",
    name: "",
    address: "",
    payment: "",
  };

  return (
    <MainLayout>
      <Formik
        initialValues={initVal}
        validationSchema={Form_validation}
        onSubmit={(val) => console.log(val)}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }: any) => (
          <>
            {console.log(errors)}
            <Form className="p-10">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Loading Details
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  {" "}
                  <TextField
                    label="Loading Point"
                    type="text"
                    placeholder="loadingPoint"
                    name="loadingPoint"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Loading Date and Time"
                    type="text"
                    placeholder="loadingTime"
                    name="loadingTime"
                  />
                </div>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Unloading Details
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  {" "}
                  <TextField
                    label="Unloading Point"
                    type="text"
                    placeholder="unloadingPoint"
                    name="unloadingPoint"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Contact Number"
                    type="text"
                    placeholder="Contact Number"
                    name="contactNumber"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Contact Name"
                    type="text"
                    placeholder="Contact Name"
                    name="contactName"
                  />
                </div>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Truck Details
              </h2>

              <div className="grid grid-cols-3 gap-x-4">
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck Body
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={counterList}
                    placeholder="Choose an Option"
                  />
                  {touched.payment && errors.payment ? (
                    <div className="input__error__icon mt-1">
                      <RiErrorWarningFill />
                    </div>
                  ) : (
                    ""
                  )}
                  <ErrorMessage
                    component="div"
                    name="payment"
                    className="input__error__container mb-3"
                  />
                </div>
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck Capacity
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={counterList}
                    placeholder="Choose an Option"
                    name="payment"
                  />
                  {touched.payment && errors.payment ? (
                    <div className="input__error__icon mt-1">
                      <RiErrorWarningFill />
                    </div>
                  ) : (
                    ""
                  )}
                  <ErrorMessage
                    component="div"
                    name="payment"
                    className="input__error__container mb-3"
                  />
                </div>
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck feet or wheels
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={counterList}
                    placeholder="Choose an Option"
                    name="payment"
                  />
                  {touched.payment && errors.payment ? (
                    <div className="input__error__icon mt-1">
                      <RiErrorWarningFill />
                    </div>
                  ) : (
                    ""
                  )}
                  <ErrorMessage
                    component="div"
                    name="payment"
                    className="input__error__container mb-3"
                  />
                </div>
                <div className="my-4">
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck Numbers
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={counterList}
                    placeholder="Choose an Option"
                    name="payment"
                  />
                  {touched.payment && errors.payment ? (
                    <div className="input__error__icon mt-1">
                      <RiErrorWarningFill />
                    </div>
                  ) : (
                    ""
                  )}
                  <ErrorMessage
                    component="div"
                    name="payment"
                    className="input__error__container mb-3"
                  />
                </div>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Good Details
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  {" "}
                  <TextField
                    label="Goods to transport"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Additional Information"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Approximate weight(in tons)"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Payment Information
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  {" "}
                  <TextField
                    label="Proposed rate per Truck"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Payment method
                  </label>
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={counterList}
                    placeholder="Choose an Option"
                    name="payment"
                  />
                  {touched.payment && errors.payment ? (
                    <div className="input__error__icon mt-1">
                      <RiErrorWarningFill />
                    </div>
                  ) : (
                    ""
                  )}
                  <ErrorMessage
                    component="div"
                    name="payment"
                    className="input__error__container mb-3"
                  />
                </div>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Billing Information
              </h2>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  className="leading-7 text-sm text-gray-600 mx-2"
                  htmlFor="default-checkbox"
                >
                  Same as user information
                </label>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  {" "}
                  <TextField
                    label=" Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="PAN (Optional)"
                    type="text"
                    placeholder="PAN"
                    name="pan"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Address"
                    type="text"
                    placeholder="Address"
                    name="address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-4 mt-8">
                <button className="border-2 text-gray-700">Clear</button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create load request
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </MainLayout>
  );
}

export default NewLoad;
