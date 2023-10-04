import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <>
            <progress className="progress progress-primary w-56" value={0} max="100"></progress>
            <progress className="progress progress-primary w-56" value="10" max="100"></progress>
            <progress className="progress progress-primary w-56" value="40" max="100"></progress>
            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            <progress className="progress progress-primary w-56" value="100" max="100"></progress>

        </>
    }

    if (user?.email) {
        return children;
    }

    return (
        <div>

        </div>
    );
};

export default PrivateRoute;