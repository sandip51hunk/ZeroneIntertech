import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { BsTruck } from "react-icons/bs";
import MainLayout from "../../container/dashboardLayout";

export const Dashboard = () => {
  //Line CHart
  const [data, setData] = useState({
    labels: ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am"],

    datasets: [
      {
        label: "No. of pageViews",
        data: [1700, 1420, 1300, 1392, 1800, 1500, 2200, 400],
        backgroundColor: "transparent",
        borderColor: "red",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "No. of Unique Users",
        data: [1000, 820, 700, 900, 1200, 1100, 1500, 300],
        borderColor: "blue",
        backgroundColor: "transparent",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });

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
            <div className="container px-5 py-24 mx-auto">
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
                <div className="py-8 px-4 mx-4 bg-white bg-opacity-75 rounded-lg	 w-96">
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
        <div>
          {" "}
          {/* <Line data={data} /> */}
        </div>
        <div></div>
      </section>
    </MainLayout>
  );
};
