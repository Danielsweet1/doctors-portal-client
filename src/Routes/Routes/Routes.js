import el from "date-fns/esm/locale/el/index.js";
import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layouts/DashBoardLayout";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appoinment/Appointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path:'/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])