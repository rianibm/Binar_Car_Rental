import User from "../models/User";
import bcrypt from "bcrypt";

class AuthService {
  async getUserById(id: number): Promise<User | undefined> {
    return User.query().findById(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return User.query().findOne({ email });
  }

  async createUser(username: string, password: string): Promise<User> {
    // Check if the username or email is already in use
    const existingUser = await User.query().findOne({ username });

    if (existingUser) {
      throw new Error("Username is already in use");
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.query().insert({
      username,
      password: hashedPassword,
    });

    return newUser;
  }
}

export default new AuthService();
