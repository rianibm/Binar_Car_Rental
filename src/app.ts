import dotenv from "dotenv";
import express from "express";
import carRoute from "./routes/cars";
import dbSetup from "../config/databaseConfig";

dbSetup();
dotenv.config({ path: "../.env" });
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", carRoute); // Mount the carRoute under '/api'

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
