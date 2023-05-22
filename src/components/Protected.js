import { Navigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
// let location=useLocation();
// console.log(location);

const Protected = ({ isLoggedIn, isAdmin, id, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    } else if (isLoggedIn && !isAdmin) {
        return <Navigate to={`/sales/${id}`} replace />;
    }

    return children;
};
export default Protected;