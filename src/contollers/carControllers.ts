// src/controllers/carController.ts
import { Request, Response } from "express";
import Car from "../models/Car";

class CarController {
  async createCar(req: Request, res: Response) {
    try {
      // Logic to create a new car
      // Include information about the creator
      const createdBy = req.user.username;
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
      const carId = req.params["id"];
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
      const carId = req.params.id;
      const loggedInUser = req.user;

      if (loggedInUser && loggedInUser.role === "admin") {
        // Only admin can update the car
        const lastUpdatedBy = loggedInUser.username;
        const carData = { ...req.body, lastUpdatedBy };

        const updatedCar = await Car.query().patchAndFetchById(carId, carData);
        res.json(updatedCar);
      } else {
        res.status(403).json({ message: "Access forbidden" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteCar(req: Request, res: Response) {
    try {
      // Logic to delete a car by ID
      const carId = req.params.id;
      const loggedInUser = req.user;

      if (loggedInUser && loggedInUser.role === "admin") {
        // Only admin can delete the car
        const deletedBy = loggedInUser.username; // Use optional chaining

        const deletedCar = await Car.query().deleteById(carId).returning("*");
        res.json({ message: "Car deleted successfully", deletedCar });
      } else {
        res.status(403).json({ message: "Access forbidden" });
      }
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
