import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthUser from '../AuthUser/AuthUser';

const RequireMember = ({ children }) => {
    const location = useLocation();
    const { token} = AuthUser()
    if (!token) {
        // logout()
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default RequireMember;