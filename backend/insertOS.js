const axios = require('axios');
const token = '66:e5b6de1fb4f34f993f7783d572efb658fa9a51c032277e6ac794cc8cff300933';

async function insertOS(idContrato, idCliente, mensagemAbertura, mensagemEncerramento, protocolo, idAtendente) {
    await axios.post("https://sistema.viartelecom.com.br/webservice/v1/su_oss_chamado", {
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
        },
        data:
        {         
            'tipo': 'C',
            'protocolo': protocolo,
            'id_assunto': '43',
            'id_cliente': idCliente,
            'origem_endereco': 'C',
            'id_filial': '1',
            'id_contrato_kit': idContrato,
            'setor': '8',
            'mensagem': mensagemAbertura,
            'status': 'F',
            'id_atendente': idAtendente,
            'mensagem_resposta': mensagemEncerramento,
        }
    })
}

module.exports = insertOS;