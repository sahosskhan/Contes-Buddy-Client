import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

import useCreator from "../Hooks/Role/usrCreator";
import Loader from "../components/Loader";
// eslint-disable-next-line react/prop-types
const CreatorRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isCreator, isCreatorLoading] = useCreator();
    const location = useLocation();

    if(loading || isCreatorLoading){
        return <Loader/>
    }

    if (user && isCreator) {
        return children;
    }
    return <Navigate to="/dashboard" state={{from: location}} replace></Navigate>
};

export default CreatorRoute;