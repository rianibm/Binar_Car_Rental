// src/handlers/carHandlers.ts

import { Request, Response } from "express";
import Car from "../models/Car";

// Validation Middleware
function validateCarFields(
  req: Request,
  res: Response,
  next: () => void
): void {
  const { name, price, size, image } = req.body;

  if (!name || !price || !size || !image) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  next();
}

// Error Handling Middleware
function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: () => void
): void {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
}

export async function getCarList(req: Request, res: Response): Promise<void> {
  try {
    const cars = await Car.query();
    res.json(cars);
  } catch (error) {
    next(error);
  }
}

export async function createCar(req: Request, res: Response): Promise<void> {
  try {
    const { name, price, size, image } = req.body;
    const car = await Car.query().insert({ name, price, size, image });

    // Return more information in the response body
    res.status(201).json({ message: "Car created successfully", id: car.id });
  } catch (error) {
    next(error);
  }
}

export async function updateCar(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const { name, price, size, image } = req.body;
    await Car.query().findById(id).patch({ name, price, size, image });

    // Return more information in the response body
    res.json({ message: "Car updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function deleteCar(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await Car.query().deleteById(id);
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    next(error);
  }
}

export async function getCarById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const car = await Car.query().findById(id);

    if (!car) {
      res.status(404).json({ error: "Car not found" });
    } else {
      res.json(car);
    }
  } catch (error) {
    next(error);
  }
}

export async function getCarBySize(req: Request, res: Response): Promise<void> {
  const { size } = req.params;

  try {
    const cars = await Car.query().where("size", size);

    if (cars.length === 0) {
      res.status(404).json({ error: "No cars found for the specified size" });
    } else {
      res.json(cars);
    }
  } catch (error) {
    next(error);
  }
}

// Apply middleware
app.use(validateCarFields);
app.use(errorHandler);
