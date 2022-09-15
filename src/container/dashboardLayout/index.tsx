import React, { useState } from "react";
import DashboardHeader from "../../components/Navigation/Header/DashboardHeader";
import Sidebar from "../../components/Sidebar";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div>
        <DashboardHeader />
        <Sidebar />
      </div>

      <div className={"admin__main__content__left__side"}>{children}</div>
    </>
  );
};

export default MainLayout;
