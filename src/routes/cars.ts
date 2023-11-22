import express from "express";
import {
  getCarList,
  createCar,
  updateCar,
  deleteCar,
  getCarById, // Added getCarById handler
  getCarBySize, // Added getCarBySize handler
} from "../handlers/carHandlers";
import { upload } from "../middlewares/uploadMiddleware";

const router = express.Router();

// Get all cars
router.get("/car", getCarList);

// Create a new car
router.post("/car", upload.single("image"), createCar);

// Update a car
router.put("/car/:id", upload.single("image"), updateCar);

// Delete a car
router.delete("/car/:id", deleteCar);

// Get a car by ID
router.get("/car/:id", getCarById);

// Get cars by size
router.get("/cars/size/:size", getCarBySize);

export default router;
