import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";



export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('LoginKey');
    // useEffect(() => {
    // },[])
    if (token) {
        return children ? children : <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
    
}
