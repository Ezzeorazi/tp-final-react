import { Navigate } from 'react-router-dom';
import {useAuth} from '../hooks';

const PrivateRoute = ({children}) => {
    const {isLogged, loading} = useAuth();

    if (loading) {
        return <h1> Loading...</h1>;
    }
    if (!isLogged) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;