import React from "react";
import DataTable from "react-data-table-component";
import { BiMessageAltDetail } from "react-icons/bi";
import SearchFIlter from "../../../components/searchFilter";
import MainLayout from "../../../container/dashboardLayout";

function Transaction() {
  const response = [
    {
      loadId: 122,
      tripId: 122 - 2,
      totalAmount: 25000,
      advanceAmount: 25000,
      dueAmount: 25000,
      remarks: "Please pay your remaining due within 3days.",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      totalAmount: 25000,
      advanceAmount: 25000,
      dueAmount: 25000,
      remarks: "Please pay your remaining due within 3days.",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      totalAmount: 25000,
      advanceAmount: 25000,
      dueAmount: 25000,
      remarks: "Please pay your remaining due within 3days.",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      totalAmount: 25000,
      advanceAmount: 25000,
      dueAmount: 25000,
      remarks: "Please pay your remaining due within 3days.",
    },
    {
      loadId: 122,
      tripId: 122 - 2,
      totalAmount: 25000,
      advanceAmount: 25000,
      dueAmount: 25000,
      remarks: "Please pay your remaining due within 3days.",
    },
  ];

  const columns2: any = [
    {
      name: "S.N",
      selector: (row: any, idx: number) => idx + 1 + ".",
      width: "100px",
    },

    {
      name: "Load Id",
      selector: (row: any) => row.loadId,
      width: "100px",
    },
    {
      name: "Trip Id",
      selector: (row: any) => <span>{row.tripId}</span>,
      width: "100px",
    },
    {
      name: "Total Amount",
      selector: (row: any) => row.totalAmount,
      width: "200px",
      center: true,
    },
    {
      name: "Advance Amount",
      selector: (row: any) => row.advanceAmount,
      width: "200px",
      center: true,
    },
    {
      name: "Due Amount",
      selector: (row: any) => <span>{row.dueAmount}</span>,
      width: "200px",
      center: true,
    },
    {
      name: "Remarks ",
      selector: (row: any) => row.remarks,
      width:'300px'
    },
    {
      selector: (row: any) => <BiMessageAltDetail size={20} />,
    },
  ];

  return (
    <MainLayout>
      <div>
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap  -mx-4 -my-8">
              <div className="py-8 px-4 mx-4 bg-white bg-opacity-75 rounded-lg	 w-96">
                <div className="h-full   flex items-start">
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                    Total amount paid
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Rs. 12,23,45,560
                    </h1>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4 mx-4 bg-white bg-opacity-75 rounded-lg	 w-96">
                <div className="h-full    flex items-start">
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                    Total due paid
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Rs. 12,23,45,560
                    </h1>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4  mx-4 bg-white bg-opacity-75 rounded-lg	 w-96">
                <div className="h-full  flex items-start">
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                    Total advance paid
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Rs. 12,23,45,560
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="px-8 mb-4">

      <SearchFIlter/>
      </div>
      <div className="px-8">
        <DataTable columns={columns2} data={response} />
      </div>
    </MainLayout>
  );
}

export default Transaction;
