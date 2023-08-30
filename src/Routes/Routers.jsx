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
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";

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
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
       {
        path:'myCart',
        element:<MyCart></MyCart>
       },
       {
        path:'allUsers',
        element:<AllUsers></AllUsers>
       },
       {
        path:'addItem',
        element:<AdminRoute><AddItem></AddItem></AdminRoute>
       },
       {
        path:'manageItem',
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
       }
      ]
    }
  ]);