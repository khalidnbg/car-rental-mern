import express from "express";
import "dotenv/config";
import cors from "cors";

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // all req will be parse to json

// Routes
app.get("/", (req, res) => res.send("server is running"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
