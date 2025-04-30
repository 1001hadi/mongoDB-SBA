import express from "express";
import {
  createComment,
  getAllComments,
  getComment,
  updateComment,
  deleteComment,
} from "../routesLogic/commentRoutesLogic.mjs";

const router = express.Router();

// create
router.post("/", createComment);

// readAll
router.get("/", getAllComments);

// read by id
router.get("/:id", getComment);

// update
router.put("/:id", updateComment);

// delete
router.delete("/:id", deleteComment);

export default router;
