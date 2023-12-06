// generateSecretKey.js
import { randomBytes } from "crypto";

const generateSecretKey = () => {
  return randomBytes(32).toString("hex");
};

console.log(generateSecretKey());
