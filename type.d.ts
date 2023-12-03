// types.d.ts
import { Request } from "express";
import { User } from "../models/User";

interface ExtendedRequest extends Request {
  user?: User; // Adjust the type based on your User model
}

export { ExtendedRequest };
