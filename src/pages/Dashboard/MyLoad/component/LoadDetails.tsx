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

      <button
        type="button"
        data-modal-toggle="crypto-modal"
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="mr-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
        Connect wallet
      </button>

      <div
        id="crypto-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="crypto-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Connect wallet
              </h3>
            </div>
            <div className="p-6">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Connect with one of our available wallet providers or create a
                new one.
              </p>
              <ul className="my-4 space-y-3">
                <li>asd</li>
              </ul>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                >
                  Why do I need to connect with my wallet?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default LoadDetails;
