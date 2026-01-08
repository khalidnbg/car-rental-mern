import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";

// Initialize express app
const app = express();

// connect db
await connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // all req will be parse to json

// Routes
app.get("/", (req, res) => res.send("server is running"));
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
