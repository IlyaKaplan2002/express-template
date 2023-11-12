import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import counter from "./controllers/counter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/counter", counter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
