import React from "react";
import DataTable from "react-data-table-component";
import { AiOutlineEye } from "react-icons/ai";
import {  TbMessageCode } from "react-icons/tb";
import { RiNavigationLine } from "react-icons/ri";
import MainLayout from "../../../../container/dashboardLayout";

function ShippedLoad() {
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
      selector: (row: any) => <span>{row.vehicleNumber}</span> ,
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
      selector: (row: any) => 'Pending',
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
      <div className="px-8">
        <DataTable columns={columns2} data={response} />
      </div>
    </MainLayout>
  );
}

export default ShippedLoad;
