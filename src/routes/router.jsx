import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/Bookings/Bookings";
import Bookings from "../pages/Bookings/Bookings";
import BookingsDetails from "../pages/BookingsDetails/BookingsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, 
      children: [
        {
          path: '/',
          element: <Home></Home>
        }, 
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        },
        {
          path: '/bookings/:id', 
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>, 
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings-details', 
          element: <PrivateRoute><BookingsDetails></BookingsDetails></PrivateRoute>
        }
      ]
    },
  ]);

export default router