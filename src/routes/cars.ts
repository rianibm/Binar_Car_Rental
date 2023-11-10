import express from "express";
import {
  getCarList,
  createCar,
  updateCar,
  deleteCar,
} from "../handlers/carHandlers";
import { upload } from "../middlewares/uploadMiddleware"; // Perbaiki path ke file middleware

const router = express.Router();

// Get all cars
router.get("/cars", getCarList);

// Create a new car
router.post("/cars", upload.single("image"), createCar);

// Update a car
router.put("/cars/:id", upload.single("image"), updateCar);

// Delete a car
router.delete("/cars/:id", deleteCar);

export default router;
