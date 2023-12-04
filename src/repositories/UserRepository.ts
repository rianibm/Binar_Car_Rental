// repositories/UserRepository.ts
import User from "../models/User";

class UserRepository {
  async findById(id: number): Promise<User | undefined> {
    return User.query().findById(id);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return User.query().findOne({ username });
  }

  async createUser(
    username: string,
    password: string,
    role: string = "user"
  ): Promise<User> {
    return User.query().insert({ username, password, role });
  }

  async updateUser(id: number, data: any, updatedBy: string): Promise<User> {
    const loggedInUser = await this.findById(id);

    if (!loggedInUser) {
      throw new Error("User not found");
    }

    if (loggedInUser.role === "admin") {
      // Only admin can update the user
      const updatedUser = await User.query().patchAndFetchById(id, {
        ...data,
        updatedBy,
      });
      return updatedUser;
    } else {
      throw new Error("Access forbidden");
    }
  }

  async deleteUser(id: number, deletedBy: string): Promise<void> {
    const loggedInUser = await this.findById(id);

    if (!loggedInUser) {
      throw new Error("User not found");
    }

    if (loggedInUser.role === "admin") {
      // Only admin can delete the user
      await User.query().deleteById(id).returning("*");
    } else {
      throw new Error("Access forbidden");
    }
  }

  // tambahkan operasi lain sesuai kebutuhan
}

export default new UserRepository();
