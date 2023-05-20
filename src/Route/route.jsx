
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home/Home';
import Mytoys from "../Pages/Home/MyToys/MyToys/Mytoys";
import Error from "../Pages/Home/Error";
import Login from "../Pages/Login/Login";
import Toydetails from "../Pages/Home/Home/Toydetails";
import PrivetRoute from "./PrivetRoute";
import Blog from "../Pages/Blog";
import UpdateToys from "../Pages/Home/MyToys/UpdateToys";
import Alltoys from "../Pages/AllToys/Alltoys";
import Regester from "../Pages/Login/Regester";
import AddToys from "../Pages/Home/AddToys/AddToys/AddToys";



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
          path: "/alltoys",
          element:<Alltoys></Alltoys>,
         
        },
        {
          path: "/mytoys",
          element:<PrivetRoute><Mytoys></Mytoys></PrivetRoute>
        },
        {
          path: "/add",
          element:<PrivetRoute><AddToys></AddToys></PrivetRoute>
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
          path: "/sighinup",
          element:<Regester></Regester>
        },
        {
          path: "/toydetails/:id",
          element:<PrivetRoute><Toydetails></Toydetails></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: "/allToy/:id",
          element:<UpdateToys></UpdateToys>,
          loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ],
    },
  ]);






export default router;