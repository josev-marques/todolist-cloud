import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/app';
import { URLS, PORT } from './src/config/urls';

const app = express();
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: URLS,
  }),
);

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor aberto em http://localhost:${PORT}`);
});
