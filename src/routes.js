import { Login } from "./components/Login/Login";
import Register from "./components/Register";
import LandingPage from "./pages/LandingPage";
import MainLayout from './container/dashboardLayout/index.tsx'
import NewLoad from "./pages/Dashboard/NewLoad";
import MyLoad from "./pages/Dashboard/MyLoad";
import Transaction from "./pages/Dashboard/Transaction";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import ChangePassword from "./pages/Dashboard/components/ChangePassword";
import MyDetails from "./pages/Dashboard/components/MyDetails";

const RouteObj = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/new-load",
    component: NewLoad,
  },
  {
    path: "/my-load",
    component: MyLoad,
  },
  {
    path: "/transaction",
    component: Transaction,
  },
  {
    path: "/change-password",
    component: ChangePassword,
  },
  {
    path: "/my-details",
    component: MyDetails,
  },
];

export default RouteObj;
