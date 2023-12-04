import dotenv from "dotenv";
import multer from "multer";
// import { v2 as cloudinary } from "cloudinary";
import cloudinary from "cloudinary";

dotenv.config({ path: "../../.env" });
dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export { upload, cloudinary };
