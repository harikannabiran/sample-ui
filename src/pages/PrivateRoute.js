import { Navigate,Route } from "react-router-dom";  

function PrivateRoute({element}){
    const isAuthenticated = true

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default PrivateRoute