import { Navigate } from "react-router-dom";


const Protected = (props) => {
    // console.log(props.id);
    // if (!props.isLoggedIn) {
    //     return <Navigate to="/" replace />;
    // } else if (props.isLoggedIn && !props.isAdmin) {
    //     return <Navigate to={'/sales/' + props.id} replace />;
    // }

    return props.children;
};
export default Protected;