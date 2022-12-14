import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container } from "./styles";

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <Container>
            <h2>Página Privada</h2>

            Olá {auth.user?.name}, tudo bem?
            Você é {auth.user?.role}
        </Container>
    );
}