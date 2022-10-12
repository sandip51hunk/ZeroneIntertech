import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
// import { SeachableDropDown } from "../../../components/SearchableDropdown";
import TextField from "../../../components/TextField";
import MainLayout from "../../../container/dashboardLayout";
import * as Yup from "yup";
import Select from "react-select";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from "axios";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

const Form_validation = Yup.object().shape({
  name: Yup.string().required("name is Required"),
  address: Yup.string().required("address is Required"),
  loadingPoint: Yup.string().required("loadingPoint is Required"),
  unloadingPoint: Yup.string().required("unloadingPoint is Required"),
  loadingTime: Yup.string().required("loadingTime is Required"),
  contactNumber: Yup.string().required("contactNumber is Required"),
  payment: Yup.string().required("payment is Required"),
  truckBody: Yup.string().required("truckBody is Required"),
  truckCapacity: Yup.string().required("truckCapacity is Required"),
  truckWheelFeet: Yup.string().required("truckCapacityOfWheel is Required"),
  truckNumber: Yup.string().required("truckNumber is Required"),
  goodTransport: Yup.string().required("goodTransport is Required"),
  additionalInfo: Yup.string().required("additionalInfo is Required"),
  approximateWeight: Yup.string().required(
    "approximateWeightInTons is Required"
  ),
  proposedRate: Yup.string().required("proposedRate is Required"),
  contactName: Yup.string().required("contactName is Required"),
  password: Yup.string()
    .min(6, "Name must be atleat 6 character long.")
    .required(" Password is Required"),
});
function NewLoad() {
  const [selectedOption, setSelectedOption] = useState<any>("");
  const [truckBody, setTruckBody] = useState<any>("");
  const [truckCapacity, setTruckCapacity] = useState<any>("");
  const [truckFeet, setTruckFeet] = useState<any>("");
  const [truckNumber, setTruckNumber] = useState<any>("");
  const [paymentMethods, setPaymentMethods] = useState<any>("");
  const [post, setPost] = useState<any>("");

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
  const baseURL = "http://159.203.180.7:3000/api/loads";

  const createPost = (val: any) => {
    axios
      .post(baseURL, {
        shipperId: "1",
        shipperName: "1",
        panNumber: val.pan,
        address: val.address,
        loadingPoint: val.loadingPoint,
        loadingDateTime: val.loadingTime,
        unLoadingPoint: val.unloadingPoint,
        estimatedDistance: "10",
        contactNumber: val.contactNumber,
        contactName: val.contactName,
        truckBody: truckBody.value,
        truckCapacity: truckCapacity.value,
        truckCapacityOfWheel: truckFeet.value,
        truckNumber: truckNumber.value,
        goodsToTransfer: val.goodTransport,
        additionalInfo: val.additionalInfo,
        approximateWeightInTons: val.approximateWeight,
        proposedRatePerTruck: val.proposedRate,
        paymentMethod: paymentMethods.value,
        minAdvance: "100",
        userId: "",
        agentId: "11",
        status: "active",
      })
      .then((response) => {
        setPost(response.data);
      });
      toast.success(post?.message);
      handleReset()
  };
  const [selectRef, setSelectRef] = useState<any>(null);
  const [selectRef1, setSelectRef1] = useState<any>(null);
  const [selectRef2, setSelectRef2] = useState<any>(null);
  const [selectRef3, setSelectRef3] = useState<any>(null);
  const [selectRef4, setSelectRef4] = useState<any>(null);
  const clearValue = () => {
    selectRef.clearValue();
    selectRef1.clearValue();
    selectRef2.clearValue();
    selectRef3.clearValue();
    selectRef4.clearValue();
  };

  const handleReset = () => {
    clearValue()
    
    setPaymentMethods("");
    const input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
      input[3].value = "";
    }
  };

  return (
    <MainLayout>
      <Formik
        initialValues={initVal}
        validationSchema={Form_validation}
        onSubmit={createPost}
      >
        {({ isSubmitting, values, resetForm, errors, touched }: any) => (
          <>
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
                    options={counterList}
                    placeholder="Choose an Option"
                    name="truckBody"
                    onChange={(e: any) => setTruckBody(e)}
                    ref={(ref) => {
                      setSelectRef(ref);
                    }}
      
                  />
                  {isEmpty(truckBody) &&
                  touched.truckBody &&
                  errors.truckBody ? (
                    <div className="input__error__icon mt-1">
                      <RiErrorWarningFill />
                    </div>
                  ) : (
                    ""
                  )}
                  {isEmpty(truckBody) && (
                    <ErrorMessage
                      component="div"
                      name="truckBody"
                      className="input__error__container mb-3"
                    />
                  )}
                </div>
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck Capacity
                  </label>
                  <Select
                    options={counterList}
                    placeholder="Choose an Option"
                    name="truckCapacity"
                    onChange={(e) => setTruckCapacity(e)}
                    ref={(ref) => {
                      setSelectRef1(ref);
                    }}
                  />
                  {isEmpty(truckCapacity) && (
                    <>
                      {touched.truckCapacity && errors.truckCapacity ? (
                        <div className="input__error__icon mt-1">
                          <RiErrorWarningFill />
                        </div>
                      ) : (
                        ""
                      )}
                      <ErrorMessage
                        component="div"
                        name="truckCapacity"
                        className="input__error__container mb-3"
                      />
                    </>
                  )}
                </div>
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck feet or wheels
                  </label>
                  <Select
                    options={counterList}
                    placeholder="Choose an Option"
                    name="truckWheelFeet"
                    onChange={(e) => setTruckFeet(e)}
                    ref={(ref) => {
                      setSelectRef2(ref);
                    }}
                  />
                  {isEmpty(truckFeet) && (
                    <>
                      {touched.truckWheelFeet && errors.truckWheelFeet ? (
                        <div className="input__error__icon mt-1">
                          <RiErrorWarningFill />
                        </div>
                      ) : (
                        ""
                      )}
                      <ErrorMessage
                        component="div"
                        name="truckWheelFeet"
                        className="input__error__container mb-3"
                      />
                    </>
                  )}
                </div>
                <div className="my-4">
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Truck Numbers
                  </label>
                  <Select
                    options={counterList}
                    placeholder="Choose an Option"
                    name="truckNumber"
                    onChange={(e) => setTruckNumber(e)}
                    ref={(ref) => {
                      setSelectRef3(ref);
                    }}
                  />
                  {isEmpty(truckNumber) && (
                    <>
                      {touched.truckNumber && errors.truckNumber ? (
                        <div className="input__error__icon mt-1">
                          <RiErrorWarningFill />
                        </div>
                      ) : (
                        ""
                      )}
                      <ErrorMessage
                        component="div"
                        name="truckNumber"
                        className="input__error__container mb-3"
                      />
                    </>
                  )}
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
                    name="goodTransport"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Additional Information"
                    type="text"
                    placeholder="Name"
                    name="additionalInfo"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Approximate weight(in tons)"
                    type="text"
                    placeholder="Name"
                    name="approximateWeight"
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
                    name="proposedRate"
                  />
                </div>
                <div>
                  {" "}
                  <label className="leading-7 text-sm text-gray-600">
                    Payment method
                  </label>
                  <Select
                    options={counterList}
                    placeholder="Choose an Option"
                    name="payment"
                    onChange={(e: any) => setPaymentMethods(e)}
                    ref={(ref) => {
                      setSelectRef4(ref);
                    }}
                  />
                  {isEmpty(paymentMethods) && (
                    <>
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
                    </>
                  )}
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
                <button
                  className="border-2 text-gray-700"
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  onClick={() => createPost(values)}
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
