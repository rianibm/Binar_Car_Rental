// config/databaseConfig.ts
import { config } from "dotenv";
import knex from "knex"; // Import knex
import path from "path"; // Import path untuk mengatasi path file migrations dan seeds

config();

const databaseConfig = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "macbook",
      password: process.env.DB_PASSWORD || "12345",
      database: process.env.DB_NAME || "postgres",
    },
    migrations: {
      directory: path.join(__dirname, "../db/migrations"), // Gunakan path.join untuk mengatasi path
    },
    seeds: {
      directory: path.join(__dirname, "../db/seeds"), // Gunakan path.join untuk mengatasi path
    },
  },
};

const knexInstance = knex(databaseConfig.development); // Inisialisasi instance knex

export default knexInstance;
