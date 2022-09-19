import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { BsTruck } from "react-icons/bs";
import MainLayout from "../../container/dashboardLayout";
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  PointElement,
} from "chart.js";

export const Dashboard = () => {
  //Line CHart

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,

        // position: "top" as const,
      },
      title: {
        display: true,
        text: "Trip requests (monthly)",
      },
    },
  };
  const data1 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65, 12, 12, 32, 34, 34, 23],
        fill: true,
        backgroundColor: "#EC4A47",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,

        // position: "top" as const,
      },
      title: {
        display: true,
        text: "Transcation (in Lakhs)",
      },
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [33, 53, 85, 41, 44, 65, 12, 12, 32, 34, 34, 23],
        fill: true,
        backgroundColor: " linear-gradient(#274AD8, #274AD8)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <MainLayout>
      <section>
        <div className="p-8">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome,
            <br className="hidden lg:inline-block" />
            ABC Industiress
          </h1>
        </div>

        <div>
          <section className="text-gray-600 body-font px-14">
            <div className="container px-5 py-8 mx-auto">
              <div className="flex flex-wrap  -mx-4 -my-8">
                <div className="py-8 px-4 mx-4 bg-white bg-opacity-75 rounded-lg	 w-96">
                  <div className="h-full   flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <BsTruck color="#EC4A47" size={40} />
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        Accepted Request
                      </h2>
                      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                        5
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="py-8 px-4  bg-white bg-opacity-75 rounded-lg	 w-96">
                  <div className="h-full    flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <BsTruck color="#EC4A47" size={40} />
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        Pending Request
                      </h2>
                      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                        5
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="py-8 px-4  mx-4 bg-white bg-opacity-75 rounded-lg	 w-96">
                  <div className="h-full  flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <BsTruck color="#EC4A47" size={40} />
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        Shipped Load
                      </h2>
                      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                        2
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="p-4">
          <div className="bg-white">
            {" "}
            <Line options={options} data={data} />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white">
            <Bar options={options1} data={data1} />;
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
