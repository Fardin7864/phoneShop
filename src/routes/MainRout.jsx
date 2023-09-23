import Root from "../Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";
import Fevorite from "../components/Fevorite/Fevorite";

import 'react-toastify/dist/ReactToastify.css';


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
            }
        ]
    }
])

export default MainRout;