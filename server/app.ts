import dotenv from 'dotenv';
dotenv.config();
import express, { urlencoded, json } from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './src/router/router';
import cors from 'cors';

const app = express();
const SERVER_PORT = 3001;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded({ extended: true }), json());

app.use('/api', router);

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on port ${SERVER_PORT}`);
});
