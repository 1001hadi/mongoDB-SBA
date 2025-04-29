import express from "express";
import Tasks from "../models/taskSchema.mjs";
import seedTasks from "../utilities/seedData.mjs";

const router = express.Router();

// search route
router.get("/search", async (req, res) => {
  // console.log(searchTerm);
  const searchQuery = req.query.query;

  if (!searchQuery) {
    return res.status(400).json({ msg: "Missing search query" });
  }

  try {
    const tasks = await Tasks.find({
      title: { $regex: searchQuery, $options: "i" },
    });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

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

  res.json(deleteTask).status(200);
});

// // seed route
router.post("/seed", async (req, res) => {
  try {
    await Tasks.deleteMany({});
    const addSeedTask = await Tasks.insertMany(seedTasks);

    res.status(201).json({
      message: "Seed task added!",
      data: addSeedTask,
    });
  } catch (err) {
    console.error("Error adding seed tasks:", err);
  }
});

export default router;
