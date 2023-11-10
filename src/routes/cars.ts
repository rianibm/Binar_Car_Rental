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
router.get("/car", getCarList);

// Create a new car
router.post("/car", upload.single("image"), createCar);

// Update a car
router.put("/car/:id", upload.single("image"), updateCar);

// Delete a car
router.delete("/car/:id", deleteCar);

export default router;
