import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Spinner className="mx-auto h-16 w-16 my-[40vh] text-pink-500/50" />;
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login' />;
    }

    return children;
};

export default PrivetRouter;