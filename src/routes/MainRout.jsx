import Root from "../Root";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";


const MainRout = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        loader: () => fetch('phone.json'),
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])

export default MainRout;