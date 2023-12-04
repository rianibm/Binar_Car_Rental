// import dotenv from "dotenv";
import express from "express";
import carRoute from "./routes/cars";
// import dbSetup from "../config/databaseConfig";
import { json, urlencoded } from "body-parser";
import { Model } from "objection";

import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = process.env["PORT"] || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

// Use ObjectionJS models
Model.knex(require("knex")(require("./knexfile")));

// Define routes
app.use("/cars", carRoute);
app.use("/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
