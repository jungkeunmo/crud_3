import express from "express";
import morgan from "morgan";
import path from "path"; 
import helmet from "helmet";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import connect from "../db";

const PORT = 7000;
const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(helmet());
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SEVVER START🥕`)
});