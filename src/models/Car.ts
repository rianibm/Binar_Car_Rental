import { Model, Pojo } from "objection";
import Knex from "knex";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure Knex using environment variables
const knex = Knex({
  client: "postgresql",
  connection: {
    host: process.env["DB_HOST"] || "localhost",
    user: process.env["DB_USER"] || "macbook",
    password: process.env["DB_PASSWORD"] || "12345",
    database: process.env["DB_NAME"] || "postgres",
  },
});

Model.knex(knex);

class Car extends Model {
  static override get tableName() {
    return "car";
  }

  id!: number;
  name!: string;
  price!: number;
  size!: string;
  image!: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string; // Add deleted_at property

  override $formatJson(json: Pojo) {
    json = super.$formatJson(json);
    return json;
  }
}

export default Car;
