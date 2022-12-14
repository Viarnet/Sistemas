import getContract from'./utils/getContract';
import getID from "./utils/getCostumerID";
import gerarProtocolo from './utils/gerarProtocolo';
import insertOS from "./insertOS";


export default {
    async Create(req, res){

        let IdCliente = req.body.idCliente;
       
        (async() =>{
        const idCliente = await getID(IdCliente);
        const idContrato = await getContract(id);
        const protocol = await gerarProtocolo();
        if(idContrato.lenght > 1){
            const contratoEscolhido =  ('retorno do front');
            const mensagemPadraoAbertura = ('retorno do front');
            const mensagemPadraoEncerra = ('retorno do front');
            await insertOS(contratoEscolhido, idCliente, mensagemAbertura, mensagemPadraoEncerra, protocol, idAtendente);
        }else{
            const mensagemPadraoAbertura = ('retorno do front');
            const mensagemPadraoEncerra = ('retorno do front');
            await insertOS(idContrato, idCliente, mensagemAbertura, mensagemPadraoEncerra, protocol, idAtendente);
        }
        })
    }
}