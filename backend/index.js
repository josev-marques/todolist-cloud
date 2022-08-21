import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/app/index.js';
import { URLS, PORT } from './src/config/urls.js';

const app = express();
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: URLS,
  }),
);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor aberto em http://localhost:${PORT}`);
});
