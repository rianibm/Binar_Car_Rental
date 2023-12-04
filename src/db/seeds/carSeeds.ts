import * as fs from "fs";
import * as path from "path";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  try {
    // Specify the full path to the JSON file by navigating up two levels
    const jsonFilePath = path.join(__dirname, "../../data/cars.json");

    // Read data from the JSON file
    const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

    // Insert the records into the "car" table
    await knex("car").insert(data);

    console.log("Seed successful!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}
