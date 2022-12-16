import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('authToken');
            const email = localStorage.getItem('email');
            if (token) {
                const user = await api.validateToken(token, email);
                if (!user.error) {
                    setUser(user);
                    setLoading(false);
                }
            }else {setLoading(false);}
        }
        validateToken();
    }, [api]);

    const signin = async (email, password) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('email', email);
            setLoading(false);
            return true;
            
        }else setLoading(false);
        return false;
    }

    const signout = async () => {
        localStorage.setItem('authToken', "");
        localStorage.setItem('email', "");
        setLoading(true)
        setUser(null);
        //await api.logout();
        setLoading(false);
        document.location.reload();
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, loading}}>
            {children}
        </AuthContext.Provider>
    );
}