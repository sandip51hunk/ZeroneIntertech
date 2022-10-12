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
import AcceptedRequest from "./pages/Dashboard/components/Request/AcceptedRequest";
import PendingRequest from "./pages/Dashboard/components/Request/PendingRequest";
import ShippedLoad from "./pages/Dashboard/components/Request/ShippedLoad";
import LoadDetails from "./pages/Dashboard/MyLoad/component/LoadDetails";
import Support from "./pages/Dashboard/Support";
import TermsConditions from "./pages/LandingPage/TermsConditions";
import PrivacyPolicies from "./pages/LandingPage/PrivacyPolicies";
import FAQs from "./pages/LandingPage/FAQs";

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
  //dashboard routes

//terms & condition
{
  path: "/terms-conditions",
  component: TermsConditions,
},
{
  path: "/privacy-policies",
  component: PrivacyPolicies,
},
{
  path: "/faqs",
  component: FAQs,
},
];

export const dashboardRoutes = [

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
  //nav routes
  {
    path: "/change-password",
    component: ChangePassword,
  },
  {
    path: "/my-details",
    component: MyDetails,
  },
  //Request routes
  {
    path: "/accepted-request",
    component: AcceptedRequest,
  },
  {
    path: "/pending-request",
    component: PendingRequest,
  },
  {
    path: "/shipped-load",
    component: ShippedLoad,
  },

  //my load routes
  {
    path: "/load-details",
    component: LoadDetails,
  },

//Support
{
  path: "/support",
  component: Support,
},
]


export default RouteObj;
