import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('authToken');
            const email = localStorage.getItem('email');
            if (token) {
                const user = await api.validateToken(token, email);
                if (!user.error) {
                    setUser(user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email, password) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('email', email);
            return true;
        }
        return false;
    }

    const signout = async () => {
        setUser(null);
        localStorage.setItem('authToken', "");
        localStorage.setItem('email', "");
        //await api.logout();
        document.location.reload();
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}