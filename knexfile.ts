import { config } from "dotenv";
config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "macbook",
      password: process.env.DB_PASSWORD || "12345",
      database: process.env.DB_NAME || "postgres",
    },
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
};
