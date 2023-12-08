// knexfile.ts
import { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config();

interface ConnectionConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

const connection: ConnectionConfig = {
  host: process.env["DB_HOST"] || "localhost",
  user: process.env["DB_USER"] || "macbook",
  password: process.env["DB_PASSWORD"] || "12345",
  database: process.env["DB_NAME"] || "postgres",
};

const config: Knex.Config = {
  client: "postgresql",
  connection,
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds",
  },
};

export default config;
