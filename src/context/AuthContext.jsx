import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({});

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
    let userStorage = JSON.parse(localStorage.getItem('user')) || null;
    const [auth, setAuth] = useState(userStorage);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(auth));
    }, [auth]);

    function login(user) {
    // user debe tener: { email, token, nombre }
    setAuth({
        email: user.email,
        token: user.token,
        nombre: user.nombre, // <-- AÑADIMOS NOMBRE AQUÍ
    });
    setErrorMessage("");
}

    function logout() {
        setAuth(null);
        localStorage.removeItem("user");
    }

    const value = {
        auth,
        login,
        logout,
        errorMessage
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
