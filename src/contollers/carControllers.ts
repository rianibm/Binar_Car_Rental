// src/controllers/carController.ts
import { Request, Response } from "express";
import Car from "../models/Car";
import User from "../models/User";

class CarController {
  async createCar(req: Request, res: Response) {
    try {
      const loggedInUser = req.user as User | undefined;

      if (!loggedInUser) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Pastikan hanya admin yang bisa membuat mobil
      if (loggedInUser.role !== "admin") {
        return res.status(403).json({ message: "Access forbidden" });
      }

      // Logic untuk membuat mobil
      const createdBy = loggedInUser.username;
      const carData = { ...req.body, createdBy };

      const newCar = await Car.query().insert(carData);
      res.json(newCar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAllCars(req: Request, res: Response) {
    try {
      // Logic to get all cars
      const cars = await Car.query();
      res.json(cars);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getCarById(req: Request, res: Response) {
    try {
      // Logic to get a car by ID
      const carId = Number(req.params["id"]);
      const car = await Car.query().findById(carId);
      res.json(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateCar(req: Request, res: Response) {
    try {
      // Logic to update a car by ID
      const carId = Number(req.params["id"]);
      const loggedInUser = req.user as User;

      if (!loggedInUser || loggedInUser.role !== "admin") {
        return res.status(403).json({ message: "Access forbidden" });
      }

      const lastUpdatedBy = loggedInUser.username;
      const carData = { ...req.body, lastUpdatedBy };

      const updatedCar = await Car.query().patchAndFetchById(carId, carData);
      res.json(updatedCar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteCar(req: Request, res: Response) {
    try {
      // Logic to delete a car by ID
      const carId = Number(req.params["id"]);
      const loggedInUser = req.user as User;

      if (!loggedInUser || loggedInUser.role !== "admin") {
        return res.status(403).json({ message: "Access forbidden" });
      }

      const deletedBy = loggedInUser.username;

      const deletedCar = await Car.query().deleteById(carId).returning("*");
      res.json({ message: "Car deleted successfully", deletedCar });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async listCars(req: Request, res: Response) {
    try {
      // Logic to get a list of cars
      const cars = await Car.query();
      res.json(cars);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new CarController();
