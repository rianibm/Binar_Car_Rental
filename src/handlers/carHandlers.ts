// src/handlers/carHandlers.ts

import { Request, Response } from "express";
import Car from "../models/Car";

export async function getCarList(req: Request, res: Response): Promise<void> {
  try {
    const car = await Car.query(); // Mengambil semua data mobil dari database
    res.json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function createCar(req: Request, res: Response): Promise<void> {
  const { name, price, size, image } = req.body;

  if (!name || !price || !size || !image) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  try {
    const car = await Car.query().insert({
      name,
      price,
      size,
      image,
    });
    res.status(201).json({ id: car.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateCar(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { name, price, size, image } = req.body;

  if (!name || !price || !size || !image) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  try {
    await Car.query().findById(id).patch({
      name,
      price,
      size,
      image,
    });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteCar(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await Car.query().deleteById(id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
