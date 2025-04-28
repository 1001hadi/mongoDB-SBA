import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();

// middlewares
app.use(express.json());

// routes
app.use("/api", (req, res) => {
  res.send("this is for test");
});

// global error Middlewares

// listener
app.listen(PORT, (req, res) => {
  console.log(`server is running on port: ${PORT}`);
});
