import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <>
            <br /><br />
            <span className="loading loading-ring loading-lg"></span>
            <br /><br />
            <h3 className="text-2xl">Loading <span className="ml-3 loading loading-dots loading-md"></span></h3>

        </>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default Private;