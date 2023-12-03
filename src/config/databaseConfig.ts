// src/config/databaseConfig.ts
import { Model } from "objection";

export default function dbSetup() {
  const Knex = require("knex");
  const knexConfig = require("../../knexfile"); // Adjust the path accordingly

  const knex = Knex(knexConfig);

  Model.knex(knex);
}
