import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthUser from '../../AuthUser/AuthUser';

const RequireUser = ({ children }) => {
    const location = useLocation();
    const { userRole, email} = AuthUser()
    if (!email) {
        // logout()
        return <Navigate to="*" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default RequireUser;