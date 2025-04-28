import express from "express";
import Tasks from "../models/taskSchema.mjs";

const router = express.Router();

// create
router.post("/", async (req, res) => {
  let newTask = await new Tasks(req.body);
  await newTask.save();
  res.json(newTask).status(201);
});

// readAll
router.get("/", async (req, res) => {
  let getTasks = await Tasks.find({});
  res.json(getTasks).status(200);
});

// read by id
router.get("/:id", async (req, res) => {
  let getTask = await Tasks.findById(req.params.id);

  if (!getTask) {
    return res.json({ msg: `task not fund!` }).status(404);
  }

  res.json(getTask).status(200);
});

// update
router.put("/:id", async (req, res) => {
  let updateTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updateTask) {
    res.json({ msg: "can't update the given task!" }).status(400);
  }

  res.json(updateTask).status(201);
});

// delete
router.delete("/:id", async (req, res) => {
  let deleteTask = await Tasks.findByIdAndDelete(req.params.id);

  res.json(deleteTask).status(201);
});

export default router;
