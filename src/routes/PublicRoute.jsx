import {useAuth} from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ( { children }) => {
    const { user } = useAuth();
    console.log(user);

    if(user) {
        return <Navigate to = '/' replace={true} />;
    }

    return children;
};

export default PublicRoute;