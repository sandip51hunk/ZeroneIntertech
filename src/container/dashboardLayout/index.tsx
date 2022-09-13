import React, {  useState } from "react";
import { Header } from "../../components/Navigation/Header/Header";

const MainLayout = ({ children }: any) => {
  const [response, setResponse] = useState<any>();

  return (
    <>
      <div>
        <Header />
        {/* <Sidebar /> */}
      </div>

      {children}
    </>
  );
};

export default MainLayout;
