import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/Errorpage/Errorpage";
import Home from "../components/Home/Home";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import Blogs from "../components/Blogs/Blogs";

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
        
        ]
    }
])
export default router;