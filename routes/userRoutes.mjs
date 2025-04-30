import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../routesLogic/userRoutesLogic.mjs";

const router = express.Router();

// create
router.post("/", createUser);

// readAll
router.get("/", getAllUsers);

// read by id
router.get("/:id", getUser);

// update
router.put("/:id", updateUser);

// delete
router.delete("/:id", deleteUser);

export default router;
