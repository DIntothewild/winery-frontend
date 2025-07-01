import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function RequireAuth() {
    const { auth } = useAuthContext();

    return auth ? (
        <Outlet />
    ) : (
        <p>No estás autorizado para ver esta página. Por favor, inicia sesión.</p>
    );
}

export default RequireAuth;
