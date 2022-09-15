import React from "react";
import DataTable from "react-data-table-component";
import { AiOutlineEye } from "react-icons/ai";
import { RiNavigationLine } from "react-icons/ri";
import { TbMessageCode } from "react-icons/tb";
import MainLayout from "../../../../container/dashboardLayout";

function LoadDetails() {
  const response = [
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Shipped",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Shipped",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Shipped",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Shipped",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Shipped",
    },
  ];

  const columns2: any = [
    {
      name: "S.N",
      selector: (row: any, idx: number) => idx + 1 + ".",
      width: "100px",
    },

    {
      name: "Trip Id",
      selector: (row: any) => <span>{row.tripId}</span>,
      width: "100px",
    },
    {
      name: "Vehicle number",
      selector: (row: any) => <span>{row.vehicleNumber}</span>,
      width: "200px",
      center: true,
    },
    {
      name: "Driver Info",
      selector: (row: any) => <span>{row.driverInfo}</span>,
      width: "200px",
      center: true,
    },
    {
      name: "Trip Amount",
      selector: (row: any) => <span>{row.tripAmount}</span>,
      width: "200px",
      center: true,
    },
    {
      name: "Advance to pay",
      selector: (row: any) => <span>{row.advance}</span>,
      width: "200px",
      center: true,
    },
    {
      name: "Status ",
      selector: (row: any) => "Pending",
    },
    {
      selector: (row: any) => (
        <div className="flex gap-4">
          <AiOutlineEye size={20} />
          <RiNavigationLine size={20} />
          <TbMessageCode size={20} />
        </div>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="p-8">
        <div className="bg-white p-8">
          <div className="mb-4 flex justify-between">
            <div className="flex gap-8">
              <div>
                <span className="text-gray-500">Load ID:</span>1242
              </div>
              <div>
                <span className="text-gray-500">Load Posted At:</span>2022-05-26
                11:43 AM
              </div>
              <div>
                <span className="text-gray-500">Shipping to be At:</span>
                2022-05-26 11:43 AM
              </div>
            </div>
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
              <span className="text-gray-500">Estimated weight/Truck</span>{" "}
              <br />
              <span> 10 Ton</span>
            </div>

            <div>
              <span className="text-gray-500">Truck Body Type</span> <br />
              <span>COntainer, 6 wheel 10 Ton</span>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-4 my-4 ">
            <div>
              <span className="text-gray-500">Goods</span> <br />
              <span>Steel</span>
            </div>

            <div>
              <span className="text-gray-500">Additional Information</span>{" "}
              <br />
              <span>ASAP</span>
            </div>

            <div>
              <span className="text-gray-500">Proposed Rate</span> <br />
              <span>Rs-25000</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <DataTable columns={columns2} data={response} />
        </div>
      </div>
    </MainLayout>
  );
}

export default LoadDetails;
