import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";

const Private = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default Private;