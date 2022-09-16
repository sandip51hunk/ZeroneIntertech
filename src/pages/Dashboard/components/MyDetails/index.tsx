import React from "react";
import { BiEdit } from "react-icons/bi";
import MainLayout from "../../../../container/dashboardLayout";

function MyDetail() {
  return (
    <MainLayout>
      <div className="p-8 ">
        <div className="bg-white ">
        <h1 className="title-font sm:text-2xl text-xl font-medium mx-4 text-gray-900 mb-3">
                  Individual Information
                </h1>
          <div className="grid grid-cols-3  p-4 gap-4  my-4">
            <div>
              <span className="text-gray-500">Name of Inviudal Company *</span> <br />
              <span>Ramchandra Rawal</span>
            </div>

            <div>
              <span className="text-gray-500">PAN/VAT number</span> <br />
              <span>9860112638</span>
            </div>

            <div>
              <span className="text-gray-500">Email ADdress</span> <br />
              <span>ramchandra.rawal@gmail.com</span>
            </div>
          </div> <hr />
          <h1 className="title-font sm:text-2xl text-xl font-medium mx-4 mt-4 text-gray-900 mb-3">
                  Address Information
                </h1>
          <div className="grid grid-cols-4 bg-white p-4 gap-4  my-4">
          <div>
              <span className="text-gray-500">Province</span> <br />
              <span>Bagmati</span>
            </div>
            <div>
              <span className="text-gray-500">District</span> <br />
              <span>Kathmandu</span>
            </div>

            <div>
              <span className="text-gray-500">Municipality</span> <br />
              <span>Kathmandu</span>
            </div>

            <div>
              <span className="text-gray-500">Ward</span> <br />
              <span>15</span>
            </div>
            
          </div> <hr />
          <h1 className="title-font sm:text-2xl text-xl mt-4 font-medium mx-4 text-gray-900 mb-3">
                  Contact Information
                </h1>
          <div className="grid grid-cols-2 w-1/2 bg-white p-4 gap-4  my-4">
            <div>
              <span className="text-gray-500">Contact Name</span> <br />
              <span>Ramchandra Rawal</span>
            </div>

            <div>
              <span className="text-gray-500">Contact number</span> <br />
              <span>9860112638</span>
            </div>
          </div>
        <button className="border-solid border-2 px-8 py-2 flex gap-1"><BiEdit size={20}/> Edit Details</button>
        </div>
        
      </div>
    </MainLayout>
  );
}

export default MyDetail;
