import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {users,loaders} = useContext(AuthContext)
  
    const location = useLocation()



    if(loaders) {
        return <progress className="progress w-56"></progress>
    }

    if(users?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;


    
};

export default PrivetRoute;