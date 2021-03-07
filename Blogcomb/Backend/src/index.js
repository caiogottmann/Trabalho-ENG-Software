import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Email, Post } from '@/app/controllers';

const app = express();
app.disable('x-powered-by');
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/Email', Email);
app.use('/Post', Post);

app.listen(port, () => {
  console.log(`Servidor rodando no link http://localhost:${port}`);
});
