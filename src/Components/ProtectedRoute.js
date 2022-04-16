import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';


const ProtectedRoute = ({ children }) => {
    
    const { login } = React.useContext(UserContext);
    
    return login ? <Navigate to="/" /> : <div>{children}</div>;
}

export default ProtectedRoute;
