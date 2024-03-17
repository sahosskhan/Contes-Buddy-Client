import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/Role/useAdmin";
import Loader from "../components/Loader";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loader/>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/dashboard" state={{from: location}} replace></Navigate>
};

export default AdminRoute; 