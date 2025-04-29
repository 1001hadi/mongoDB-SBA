import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";
import { globalErr } from "./middlewares/errMiddleware.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import taskRoutes from "./routes/taskRoutes.mjs";
import commentRoutes from "./routes/commentRoutes.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();

// middlewares
app.use(express.json());

// routes
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/comment", commentRoutes);

// global error Middlewares
app.use(globalErr);
// listener
app.listen(PORT, (req, res) => {
  console.log(`server is running on port: ${PORT}`);
});
