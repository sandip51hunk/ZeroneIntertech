import React from "react";
import DataTable from "react-data-table-component";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import { BiEdit, BiMessageAltDetail } from "react-icons/bi";
import MainLayout from "../../../../container/dashboardLayout";

function PendingRequest() {
  const response = [
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Accepted",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Accepted",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Accepted",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Accepted",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      vehicleNumber: "Na 1 Ka 1216",
      driverInfo: "Ram Dahal",
      tripAmount: 25000,
      advance: 0,
      status: "Accepted",
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
      selector: (row: any) => '-' ,
      width: "200px",
      center: true,
    },
    {
      name: "Driver Info",
      selector: (row: any) => "Pending",
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
      selector: (row: any) => 'Pending',
    },
    {
      selector: (row: any) => (
        <div className="flex gap-4">
          <AiOutlineEye size={20} />
          <BiEdit size={20} />
          <AiOutlineClose size={20} />
        </div>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="px-8">
        <DataTable columns={columns2} data={response} />
      </div>
    </MainLayout>
  );
}

export default PendingRequest;
