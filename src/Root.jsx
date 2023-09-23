import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
const phones = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer/>
            <Outlet context={phones}></Outlet>
        </div>
    );
};

export default Root;