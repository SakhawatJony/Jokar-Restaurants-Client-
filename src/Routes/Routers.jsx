import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Manu/Manu/Manu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";

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
            element: <Login></Login>
        },
      ]
    },
  ]);