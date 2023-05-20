// import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home/Home';
import Mytoys from "../Pages/Home/MyToys/MyToys/Mytoys";
import AddToys from "../Pages/Home/AddToys/AddToys/AddToys";
import Error from "../Pages/Home/Error";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Login/regester";
import Toydetails from "../Pages/Home/Home/Toydetails";
import PrivetRoute from "./PrivetRoute";
import Blog from "../Pages/Blog";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/mytoys",
          element:<PrivetRoute><Mytoys></Mytoys></PrivetRoute>
        },
        {
          path: "/add",
          element:<AddToys></AddToys>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/sighinup",
          element:<Regester></Regester>
        },
        {
          path: "/toydetails/:id",
          element:<Toydetails></Toydetails>,
          loader:({params})=>fetch(`http://localhost:5000/allToy/${params.id}`)
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ],
    },
  ]);






export default router;