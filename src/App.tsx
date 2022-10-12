import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./HOC/privateRoutes";
import RouteObj, { dashboardRoutes } from "./routes";

interface Iprops {
  path: string;
  component: any;
}

function App() {
  return (
    <React.Fragment>
      <Suspense>
        <ToastContainer/>
        <Routes>
          {RouteObj.map((e: Iprops, i: number) => (
            <Route path={e.path} key={i} element={<e.component />} />
          ))}
          {dashboardRoutes?.map((e: Iprops, i: number) => (
            <Route path="/" element={<PrivateRoute />}>
              <Route path={e.path} element={<e.component />} />
            </Route>
          ))}
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
