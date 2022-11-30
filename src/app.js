import express from 'express'
import mongodb from './config/dbConection.js'
import routes from "./routes/index.js"

mongodb.on("error", console.log.bind(console, 'Erro de conexão'));
mongodb.once("open", () => {
    console.log("conexão com o banco feita  com sucesso!");
})

const app = express();
app.use(express.json());
routes(app);

export default app