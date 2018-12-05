import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import DashboardPage from "views/DashboardPage/DashboardPage.jsx";
import LoginPage from "../views/LoginPage/LoginPage";
import ForgotPassword from "../views/ForgotPassword/ForgotPassword";


var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/dashboard", name: "DashboardPage", component: DashboardPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/forgot-password", name: "ForgotPass", component: ForgotPassword },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/components", name: "Components", component: Components }
];

export default indexRoutes;
