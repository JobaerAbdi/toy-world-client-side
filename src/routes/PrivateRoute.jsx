import { useContext } from "react";
import { AuthContext } from "../components/context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <LoadingSpinner/>
    }
    if(user?.email){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate> 
};

export default PrivateRoute;