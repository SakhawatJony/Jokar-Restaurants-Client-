import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Manu/Manu/Manu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/manu",
            element: <Manu></Manu>
        },
        {
            path:"/order/:category",
            element: <Order></Order>
        },
        {
            path:"/login",
            element: <Login>+</Login>
        },
        {
            path:"/signUp",
            element: <SignUp></SignUp>
        },
        {
            path:"/secret",
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
  ]);