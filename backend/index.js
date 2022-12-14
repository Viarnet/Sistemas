import express from 'express';
import GetContract from './controllers/GetContract.js';
const app = express();
const port = 3000;

app.get('/os/getcontracts/:nomeCliente', GetContract.GetContract);

app.listen(port, () => {
  console.log(`🚀 Api running in http://localhost:${port}`)
})
