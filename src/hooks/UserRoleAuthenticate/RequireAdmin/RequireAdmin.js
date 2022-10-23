import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthUser from '../../AuthUser/AuthUser';

const RequireAdmin = ({ children }) => {
    const location = useLocation();
    const { userRole} = AuthUser()
    if (userRole !== 'admin') {
        // logout()
        return <Navigate to="*" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default RequireAdmin;