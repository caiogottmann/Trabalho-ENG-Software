import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Email, Post } from '@/app/controllers';

const app = express();
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/Email', Email);
app.use('/Post', Post);

export default app