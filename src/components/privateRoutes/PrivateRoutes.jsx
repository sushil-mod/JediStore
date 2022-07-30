import react from "react";
import { Navigate , useLocation } from "react-router-dom";
import {useAthorizer} from "../../context/AuthorizerContext";

function PrivateRoutes({ children }) {
    const {authState:{encodedToken}} = useAthorizer();
    const location = useLocation();

    console.log("route",location , encodedToken)
    return encodedToken ? children : <Navigate to={'/login'} state={{ from : location }}  replace />;
}

export default PrivateRoutes;