import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

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
