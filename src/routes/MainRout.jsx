import Root from "../Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";
import Fevorite from "../components/Fevorite/Fevorite";

import 'react-toastify/dist/ReactToastify.css';
import SignUp from "../components/Signup/SignUp";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";


const MainRout = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        loader: () => fetch('/phone.json'),
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/details/:id',
                element:<PhoneDetails></PhoneDetails>,
            },
            {
                path: '/fevorite',
                element: <Fevorite></Fevorite>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default MainRout;