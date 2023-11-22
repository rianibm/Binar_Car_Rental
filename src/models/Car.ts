import { Model, Pojo } from "objection";
import Knex from "knex";

const knexConfig = require("../../knexfile"); // Import your Knex configuration
const knex = Knex(knexConfig.development);
Model.knex(knex);

class Car extends Model {
  static get tableName() {
    return "car";
  }

  id!: number;
  name!: string;
  price!: number;
  size!: string;
  image!: string;
  created_at?: string;
  updated_at?: string;

  $formatJson(json: Pojo) {
    json = super.$formatJson(json);
    return json;
  }
}

export default Car;
