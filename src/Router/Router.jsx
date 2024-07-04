// import React from 'react';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import SignNew from "../Pages/SignNew";
import Signin from "../Pages/Signin";

 function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: '/Details/:id',
            element: <Details/>
        },
        {
            path: '/Details',
            element: <Details/>
        },
        {
            path: '/SignNew',
            element: <SignNew/>
        },
        {
            path: '/Signin',
            element: <Signin/>
        }
      ]);
    return (
        <RouterProvider router={router} />
    )
}

export default Router