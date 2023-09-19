import {useAuth} from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ( { children }) => {
    const { user } = useAuth();
    console.log(user);

    if(!user) {
        return <Navigate to = '/login' replace={true} />;
    }

    return children;
};

export default PrivateRoute;