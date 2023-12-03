// src/routes/cars.ts
import express from "express";
import {
  getCarList,
  createCar,
  updateCar,
  deleteCar,
  getCarById,
  getCarBySize,
} from "../handlers/carHandlers";
import { upload } from "../middlewares/uploadMiddleware";

const router = express.Router();

// Get all cars
router.get("/cars", getCarList);

// Create a new car
router.post("/cars", upload.single("image"), createCar);

// Update a car
router.put("/cars/:id", upload.single("image"), updateCar);

// Delete a car
router.delete("/cars/:id", deleteCar);

// Get a car by ID
router.get("/cars/:id", getCarById);

// Get cars by size
router.get("/cars/size/:size", getCarBySize);

export default router;
