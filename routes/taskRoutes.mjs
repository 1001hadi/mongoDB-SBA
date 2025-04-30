import express from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  searchTask,
  addSeedTask,
} from "../routesLogic/taskRoutesLogic.mjs";

const router = express.Router();

// search route
router.get("/search", searchTask);

// create
router.post("/", createTask);

// readAll
router.get("/", getAllTasks);

// read by id
router.get("/:id", getTask);

// update
router.put("/:id", updateTask);

// delete
router.delete("/:id", deleteTask);

// // seed route
router.post("/seed", addSeedTask);

export default router;
