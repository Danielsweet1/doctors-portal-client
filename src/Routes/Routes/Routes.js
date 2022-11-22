import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layouts/DashBoardLayout";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appoinment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorElement from "../../Pages/Shared/ErrorElement/ErrorElement";
import SignUp from "../../Pages/Signup/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
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
        errorElement:<ErrorElement></ErrorElement>,
        children: [
            {
                path:'/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                loader: ({params})=>fetch(`http://localhost:5000/payment/${params.id}`),
                element: <AdminRoute><Payment></Payment></AdminRoute>
            },
        ]
    }
])