import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// mais tarde configurar no pra ficar mais organizadinho ----- process.env.PORT
const PORT = 3001;

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("hello world");
});

app
  .listen(PORT, () => {
    console.log("running on", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
