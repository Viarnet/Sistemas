import axios from "axios";
const token = '66:e5b6de1fb4f34f993f7783d572efb658fa9a51c032277e6ac794cc8cff300933';

async function getID(name) {
    await axios.get("https://sistema.viartelecom.com.br/webservice/v1/cliente", {
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
            ixcsoft: 'listar'
        },
        data:
        {         
            qtype: 'razao',
            query: name,
            oper: '=',
            page: '1',
            rp: '20',
            sortname: 'razao',
            sortorder: 'desc'
        }
    }).then(({data})=>{
        return data.registros[0].id;
    })
}

export default getID;