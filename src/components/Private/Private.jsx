import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-ring loading-lg"><h3 className="text-xl">Loading <span className="loading loading-dots loading-xs"></span></h3></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default Private;