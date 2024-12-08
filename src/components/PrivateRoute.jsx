import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import Loader from "./Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const {pathname} = useLocation()
    console.log(pathname)
    if(loading){
        return <Loader></Loader>
    }
    if(user && user?.email){
        return children
    }
    return (
        <div>
            <div>
            <Navigate state={pathname} to={"/login"}></Navigate>
        </div>
        </div>
    );
};

export default PrivateRoute;