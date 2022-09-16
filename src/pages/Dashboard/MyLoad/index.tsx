import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SearchFIlter from "../../../components/searchFilter";
import MainLayout from "../../../container/dashboardLayout";

function MyLoad() {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="p-4">

      <SearchFIlter />
      <div className="bg-white p-8 mt-4">
        <div className="mb-4 flex justify-between">
          <div className="flex gap-8">
          <div>

          <span className="text-gray-500">Load ID:</span>1242
          </div>
          <div>

          <span className="text-gray-500">Load Posted At:</span>2022-05-26 11:43 AM
          </div>
          <div>

          <span className="text-gray-500">Shipping to be At:</span>2022-05-26 11:43 AM
          </div>
          </div>
          <div onClick={()=>navigate('/load-details')}><AiOutlineEye size={30}/></div>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-4 my-4">
          <div>
            <span className="text-gray-500">Loading point</span> <br />
            <span>Address 1</span>
          </div>
         
          <div>
            <span className="text-gray-500">Unloading point</span> <br />
            <span>Address 2</span>
          </div>
         
          <div>
            <span className="text-gray-500">Estimated distance</span> <br />
            <span>150km</span>
          </div>
         
          <div>
            <span className="text-gray-500">No of Trucks pending</span> <br />
            <span>2/5</span>
          </div>
         
          <div>
            <span className="text-gray-500">Estimated weight/Truck</span> <br />
            <span> 10 Ton</span>
          </div>
         
          <div>
            <span className="text-gray-500">Truck Body Type</span> <br />
            <span>COntainer, 6 wheel 10 Ton</span>
          </div>
         
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-4 my-4 ">
          <div>
            <span className="text-gray-500">Goods</span> <br />
            <span>Steel</span>
          </div>
          
          <div>
            <span className="text-gray-500">Additional Information</span> <br />
            <span>ASAP</span>
          </div>
          
          <div>
            <span className="text-gray-500">Goods Weight (in tons)</span> <br />
            <span>125</span>
          </div>
          
          <div>
            <span className="text-gray-500">Proposed Rate</span> <br />
            <span>Rs-25000</span>
          </div>
          
        </div>
      </div>
      <div className="bg-white p-8 mt-4">
        <div className="mb-4 flex justify-between">
          <div className="flex gap-8">
          <div>

          <span className="text-gray-500">Load ID:</span>1242
          </div>
          <div>

          <span className="text-gray-500">Load Posted At:</span>2022-05-26 11:43 AM
          </div>
          <div>

          <span className="text-gray-500">Shipping to be At:</span>2022-05-26 11:43 AM
          </div>
          </div>
          <div onClick={()=>navigate('/load-details')}><AiOutlineEye size={30}/></div>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-4 my-4">
          <div>
            <span className="text-gray-500">Loading point</span> <br />
            <span>Address 1</span>
          </div>
         
          <div>
            <span className="text-gray-500">Unloading point</span> <br />
            <span>Address 2</span>
          </div>
         
          <div>
            <span className="text-gray-500">Estimated distance</span> <br />
            <span>150km</span>
          </div>
         
          <div>
            <span className="text-gray-500">No of Trucks pending</span> <br />
            <span>2/5</span>
          </div>
         
          <div>
            <span className="text-gray-500">Estimated weight/Truck</span> <br />
            <span> 10 Ton</span>
          </div>
         
          <div>
            <span className="text-gray-500">Truck Body Type</span> <br />
            <span>COntainer, 6 wheel 10 Ton</span>
          </div>
         
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-4 my-4 ">
          <div>
            <span className="text-gray-500">Goods</span> <br />
            <span>Steel</span>
          </div>
          
          <div>
            <span className="text-gray-500">Additional Information</span> <br />
            <span>ASAP</span>
          </div>
          
          <div>
            <span className="text-gray-500">Goods Weight (in tons)</span> <br />
            <span>125</span>
          </div>
          
          <div>
            <span className="text-gray-500">Proposed Rate</span> <br />
            <span>Rs-25000</span>
          </div>
          
        </div>
      </div>
      <div className="bg-white p-8 mt-4">
        <div className="mb-4 flex justify-between">
          <div className="flex gap-8">
          <div>

          <span className="text-gray-500">Load ID:</span>1242
          </div>
          <div>

          <span className="text-gray-500">Load Posted At:</span>2022-05-26 11:43 AM
          </div>
          <div>

          <span className="text-gray-500">Shipping to be At:</span>2022-05-26 11:43 AM
          </div>
          </div>
          <div onClick={()=>navigate('/load-details')}><AiOutlineEye size={30}/></div>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-4 my-4">
          <div>
            <span className="text-gray-500">Loading point</span> <br />
            <span>Address 1</span>
          </div>
         
          <div>
            <span className="text-gray-500">Unloading point</span> <br />
            <span>Address 2</span>
          </div>
         
          <div>
            <span className="text-gray-500">Estimated distance</span> <br />
            <span>150km</span>
          </div>
         
          <div>
            <span className="text-gray-500">No of Trucks pending</span> <br />
            <span>2/5</span>
          </div>
         
          <div>
            <span className="text-gray-500">Estimated weight/Truck</span> <br />
            <span> 10 Ton</span>
          </div>
         
          <div>
            <span className="text-gray-500">Truck Body Type</span> <br />
            <span>COntainer, 6 wheel 10 Ton</span>
          </div>
         
        </div>
        <hr />
        <div className="grid grid-cols-4 gap-4 my-4 ">
          <div>
            <span className="text-gray-500">Goods</span> <br />
            <span>Steel</span>
          </div>
          
          <div>
            <span className="text-gray-500">Additional Information</span> <br />
            <span>ASAP</span>
          </div>
          
          <div>
            <span className="text-gray-500">Goods Weight (in tons)</span> <br />
            <span>125</span>
          </div>
          
          <div>
            <span className="text-gray-500">Proposed Rate</span> <br />
            <span>Rs-25000</span>
          </div>
          
        </div>
      </div>
      </div>
    </MainLayout>
  );
}

export default MyLoad;
