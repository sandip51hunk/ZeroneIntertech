import { Login } from "./components/Login/Login";
import Register from "./components/Register";
import LandingPage from "./pages/LandingPage";

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
];

export default RouteObj;
