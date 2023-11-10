import * as fs from "fs";
import * as path from "path";
import { Knex } from "knex"; // Import Knex sebagai tipe

export async function seed(knex: Knex): Promise<void> {
  // Specify the full path to the JSON file by navigating up two levels
  const jsonFilePath = path.join(__dirname, "../../data/cars.json");

  // Read data from the JSON file
  const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

  // Insert the records into the "cars" table
  await knex("cars").insert(data);
}
