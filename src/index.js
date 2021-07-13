import { config } from "dotenv";
import cors from "cors";
import express from "express";

config();

const api = express();
const { PORT } = process.env;

api.use(cors());

api.get("/", (req, res) => {
  res.send("API's home");
});

api.get("/frontend", (req, res) => {
  res.json({ title: "React", hours: 10 });
});

api.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`);
  console.log("Shut down: ctrl + c");
});
