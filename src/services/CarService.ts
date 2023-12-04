// services/CarService.ts
import CarRepository from "../repositories/CarRepository";
import Car from "../models/Car";
import User from "../models/User";

class CarService {
  async findAll(): Promise<Car[]> {
    return await CarRepository.getAll();
  }

  async create(user: User, data: Car): Promise<Car> {
    // Lakukan validasi bahwa pengguna adalah admin sebelum membuat data car
    if (user.role !== "admin") {
      throw new Error("Unauthorized: Only admin can create a car.");
    }

    // Lakukan validasi atau logika tambahan sebelum membuat data car
    return await CarRepository.create(data, user.username);
  }

  async findOne(id: number): Promise<Car | undefined> {
    return await CarRepository.getById(id);
  }

  async update(user: User, id: number, data: Car): Promise<number> {
    // Lakukan validasi bahwa pengguna adalah admin sebelum mengupdate data car
    if (user.role !== "admin") {
      throw new Error("Unauthorized: Only admin can update a car.");
    }

    // Lakukan validasi atau logika tambahan sebelum mengupdate data car
    return await CarRepository.update(id, data, user.username);
  }

  async delete(user: User, id: number): Promise<number> {
    // Lakukan validasi bahwa pengguna adalah admin sebelum menghapus data car
    if (user.role !== "admin") {
      throw new Error("Unauthorized: Only admin can delete a car.");
    }

    // Lakukan validasi atau logika tambahan sebelum menghapus data car
    return await CarRepository.delete(id, user.username);
  }
}

export default new CarService();
