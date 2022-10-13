
import express from "express";
import cors from 'cors';
import { config } from 'dotenv'
import { api } from "./router/api";



const app = express();
// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', api);


app.set('view engine', 'ejs');
app.listen(port, () => {
    console.log(`Documense running on ${port}, visit http://localhost:${port} to see`);
  });

  
  app.get('/', function (_req: any, res: any) {
    res.status(200).send('Happy Coding!');
  })