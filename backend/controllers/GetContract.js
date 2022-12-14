import {getContract} from './utils/getContract.js';
import {getID} from "./utils/getCostumerID.js";

export default {
    async GetContract(req, res){

        let NomeCliente = req.body.nomeCliente;

        const IdCliente = await getID(NomeCliente);

        const IdContrato = await getContract(id);

        return res.status(200).json(IdContrato);

    }
}