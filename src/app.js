import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorManipulator from "./middlewares/errorManipulator.js";
import cors from "cors";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão Estabelecida");
});

function enableCors() {
  const options = {
    methods: "GET,OPTIONS, PUT, POST, DELETE",
    origin: "*",
  };
  app.use(cors(options));
}

const app = express();
enableCors();
app.use(express.json());
routes(app);
app.use(errorManipulator);

export default app;
