import express from 'express';
import GetContract from './controllers/GetContract.js';
const app = express()
const port = 3000;
//import CreateOS from './controllers/CreateOS';






app.get('/os/getcontracts/:nomeCliente', GetContract.GetContract);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//logica do mathe para o index.js
//
//const getContract = require('./utils/getContract');
//const getID = require("./utils/getCostumerID");
//const gerarProtocolo = require('./utils/gerarProtocolo');
//const insertOS = require("./insertOS");
//const idAtendente = select id_atendente from tb_usuarios where usuario_nome = 'usuarioLogado';
//
//(async() =>{
//    const idCliente = await getID(idCliente);
//    const idContrato = await getContract(id);
//    const protocol = await gerarProtocolo();
//    if(idContrato.lenght > 1){
//        const contratoEscolhido =  ('retorno do front');
//        const mensagemPadraoAbertura = ('retorno do front');
//        const mensagemPadraoEncerra = ('retorno do front');
//        await insertOS(contratoEscolhido, idCliente, mensagemAbertura, mensagemPadraoEncerra, protocol, idAtendente);
//    }else{
//        const mensagemPadraoAbertura = ('retorno do front');
//        const mensagemPadraoEncerra = ('retorno do front');
//        await insertOS(idContrato, idCliente, mensagemAbertura, mensagemPadraoEncerra, protocol, idAtendente);
//    }
//})