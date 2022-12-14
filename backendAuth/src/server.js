import express from 'express';
import { router } from './routes.js';
import cors from 'cors';

const app = express();
const port = 3333;

app.use(cors())

app.use(express.json());

app.use(router);

app.listen(3333, ()=> console.log(`🚀BackendAuth is running on http://localhost:${port}`))