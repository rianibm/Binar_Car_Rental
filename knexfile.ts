// knexfile.ts
import { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config();

const config: Knex.Config = {
  client: "postgresql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "macbook",
    password: process.env.DB_PASSWORD || "12345",
    database: process.env.DB_NAME || "postgres",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds",
  },
};

export default config;
