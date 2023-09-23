import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Root = () => {
const phones = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Outlet context={phones}></Outlet>
        </div>
    );
};

export default Root;