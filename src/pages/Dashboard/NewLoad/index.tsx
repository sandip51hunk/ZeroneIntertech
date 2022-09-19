import { Field, Form, Formik } from "formik";
import React from "react";
import { SeachableDropDown } from "../../../components/SearchableDropdown";
import TextField from "../../../components/TextField";
import MainLayout from "../../../container/dashboardLayout";
import * as Yup from "yup";



const Form_validation = Yup.object().shape({
  name: Yup.string()
    .required("name is Required"),
  password: Yup.string()
    .min(6, "Name must be atleat 6 character long.")
    .required(" Password is Required"),
});
function NewLoad() {
  const counterList = [
    {
      label: "sabin",
      value: "100",
    },
  ];
  const initVal = {
    loadingPoint:'',
    loadingTime:'',
    unloadingPoint:'',
    contactNumber:'',
    contactName:'',
    truckBody:'',
    truckCapacity:'',
    truckFeet:'',
    truckNumber:'',
    goodTransport:'',
    additionalInfo:'',
    approximateWeight:'',
    proposedRate:'',
    paymentMethod:'',
    name:'',
    address:'',
  }

  return (
    <MainLayout>
      <Formik
        initialValues={initVal}
        validationSchema={Form_validation}
        onSubmit={(val) => console.log(val)}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }: any) => (
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
                  <TextField
                    label="Truck Body"
                    type="text"
                    placeholder="Truck Body"
                    name="truckBody"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
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
                  <TextField
                    label="Advance in % (min 50)"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Advance in % (min 50)"
                    type="text"
                    placeholder="Name"
                    name="name"
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
              <button type="submit">Create load request</button>
            </Form>
          </>
        )}
      </Formik>
    </MainLayout>
  );
}

export default NewLoad;
