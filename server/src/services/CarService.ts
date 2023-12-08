// src/services/CarService.ts
// Front-end service for fetching car data
import CarRepository from "../repositories/CarRepository";
import Car from "../models/CarModel";
import User from "../models/UserModel";

class CarService {
  async findAll(): Promise<Car[]> {
    return await CarRepository.getAll();
  }

  async create(user: User, data: Car): Promise<Car> {
    // Validation that the user is an admin before creating a car data
    if (user.role !== "admin") {
      throw new Error("Unauthorized: Only admin can create a car.");
    }

    // Additional validation or logic before creating car data
    return await CarRepository.create(data, user.username);
  }

  async findOne(id: number): Promise<Car | undefined> {
    return await CarRepository.getById(id);
  }

  async update(user: User, id: number, data: Car): Promise<number> {
    // Validation that the user is an admin before updating car data
    if (user.role !== "admin") {
      throw new Error("Unauthorized: Only admin can update a car.");
    }

    // Additional validation or logic before updating car data
    return await CarRepository.update(id, data, user.username);
  }

  async delete(user: User, id: number): Promise<number> {
    // Validation that the user is an admin before deleting car data
    if (user.role !== "admin") {
      throw new Error("Unauthorized: Only admin can delete a car.");
    }

    // Additional validation or logic before deleting car data
    return await CarRepository.delete(id, user.username);
  }
}

const carServiceInstance = new CarService();

export default carServiceInstance;
