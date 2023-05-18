import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-136px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;