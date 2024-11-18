import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { env } from "./config/env";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", routes);

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});
