// /src/server/srcserver.js
import express from "express";
import bodyParser from "body-parser";
import { Pool } from "pg";

const app = express();
const port = 5000;

// Replace these with your PostgreSQL connection details
const pool = new Pool({
  user: "your_db_user",
  host: "your_db_host",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432,
});

app.use(bodyParser.json());

// Get user data by email
app.get("/api/users/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a new user
app.post("/api/users", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (email, password, role, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *",
      [email, password, role]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
