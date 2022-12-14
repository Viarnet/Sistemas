import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Login } from "../pages/Login";
import SideMenu from "../components/SideMenu";

export function Layout (){
    const auth = useContext(AuthContext);
    
    if(auth.user){
        return (
            <>
                <SideMenu />
                <Outlet />
            </>
        )
    }else return <Login />;


}