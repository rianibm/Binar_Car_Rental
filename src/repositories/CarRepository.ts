import Car from "../models/Car";
import User from "../models/User";

class CarRepository {
  async getAll(): Promise<Car[]> {
    return Car.query();
  }

  async getById(id: number): Promise<Car | undefined> {
    return Car.query().findById(id);
  }

  async create(data: Car, createdBy: string): Promise<Car> {
    const loggedInUser = await User.query().findOne({ username: createdBy });

    if (!loggedInUser || loggedInUser.role !== "admin") {
      throw new Error("Access forbidden");
    }

    return Car.query().insert(data);
  }

  async update(id: number, data: Car, updatedBy: string): Promise<number> {
    const loggedInUser = await User.query().findOne({ username: updatedBy });

    if (!loggedInUser || loggedInUser.role !== "admin") {
      throw new Error("Access forbidden");
    }

    return Car.query().findById(id).patch(data);
  }

  async delete(id: number, deletedBy: string): Promise<number> {
    const loggedInUser = await User.query().findOne({ username: deletedBy });

    if (!loggedInUser || loggedInUser.role !== "admin") {
      throw new Error("Access forbidden");
    }

    return Car.query().deleteById(id);
  }
}

export default new CarRepository();
