import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';


const ProtectedRoute = ({ children, needLogin }) => {
    
    const { login } = React.useContext(UserContext);

    if (needLogin) {
        return login ? <div>{children}</div> : <Navigate to="/" />  ;
    }
    else {
        return login ? <Navigate to="/" /> : <div>{children}</div>;
    }
    
}

export default ProtectedRoute;
