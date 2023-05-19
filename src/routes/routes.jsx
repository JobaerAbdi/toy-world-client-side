import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/Errorpage/Errorpage";
import Home from "../components/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>,
            },
            {
                path : '/allToys',
                element : <AllToys></AllToys>,
            },
        
            {
                path : '/myToys',
                element : <MyToys></MyToys>,
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>,
            },
            {
                path : '/login',
                element : <Login></Login>,
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/addToy',
                element : <AddToy></AddToy>
            },
            {
                path : '/singleToy/:id',
                element : <PrivateRoute><ToyDetails/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
            },
        
        ]
    }
])
export default router;