import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container } from "./styles";

export const Private = () => {
    const auth = useContext(AuthContext);
    const [clientesInputs, setClientesInputs] = useState([]);
    const [messagem1, setMessagem1] = useState("");
    const [messagem2, setMessagem2] = useState("");

    function handleAddInputCliente(){
        setClientesInputs([...clientesInputs, ""]);
    }

    function handleChangeCliente(e, index){
        clientesInputs[index] = e.target.value;
        setClientesInputs([...clientesInputs])
    }

    function handleRemoveInputPhone(position){
        setClientesInputs([...clientesInputs.filter((_, index) => index !== position)]);
    }
    
    function handleCreateOs(){
        console.log(clientesInputs,messagem1,messagem2)
    }

    return (
        <Container>
            {clientesInputs.map((cliente, index)=> (
                <label htmlFor={`cliente-${index + 1}`} key={index}>{`Cliente ${index + 1}`}
                    <input 
                    type='text' 
                    id={`cliente-${index + 1}`}
                    key={index}
                    value={cliente}
                    placeholder={`Assinante ${index + 1}`}
                    onChange={(e) => {handleChangeCliente(e, index)}}
                    />
                
                <button onClick={()=>{handleRemoveInputPhone(index)}}>x</button>
                </label>
            ))}

            <button onClick={handleAddInputCliente}>+ Cliente</button>

            <div style={{display: 'flex'}}>
                <textarea type="text" 
                id="padrao"  rows="5" cols="33" 
                placeholder="Mensagem Padrão!"
                value={messagem1}
                onChange={(e)=>{setMessagem1(e.target.value)}}
                />
                <textarea type="text" 
                id="padrao2"  rows="5" cols="33"
                placeholder="Mensagem Padrão2!"
                value={messagem2}
                onChange={(e)=>{setMessagem2(e.target.value)}}
                />
            </div>
            <button onClick={handleCreateOs}>Criar e finalizar</button>
        </Container>
    );
}