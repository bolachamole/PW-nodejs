import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv.js";
import morgan from "morgan";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;
app.use(morgan("short"))

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/img', express.static(`${publicPath}/img`));

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});