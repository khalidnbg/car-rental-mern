import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize express app
const app = express();

// connect db
await connectDB();

// Configure CORS to allow specific origins
const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://localhost:5173",
  "https://car-rental-beta-peach.vercel.app",
  "https://car-rental-khalid-nabgaoui.vercel.app",
  "https://car-rental.vercel.app",
]);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allows Postman/server-to-server

    if (allowedOrigins.has(origin)) return callback(null, true);

    const isVercelPreview =
      /^https:\/\/car-rental-[a-z0-9-]+-khalid-nabgaoui\.vercel\.app$/i.test(origin);

    if (isVercelPreview) return callback(null, true);

    return callback(new Error(`CORS blocked for origin: ${origin}`), false);
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json()); // all req will be parse to json

// Routes
app.get("/", (req, res) => res.send("server is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/booking", bookingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
