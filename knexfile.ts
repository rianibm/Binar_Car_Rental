import { config } from "dotenv";
config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "macbook",
      password: "12345",
      database: "postgres",
    },
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
};
