import Tasks from "../models/taskSchema.mjs";
import seedTasks from "../utilities/seedData.mjs";

// create task
export async function createTask(req, res) {
  let newTask = await new Tasks(req.body);
  await newTask.save();
  res.json(newTask).status(201);
}

// get all tasks
export async function getAllTasks(req, res) {
  let getTasks = await Tasks.find({});
  res.json(getTasks).status(200);
}

// get specific task
export async function getTask(req, res) {
  let getTask = await Tasks.findById(req.params.id);

  if (!getTask) {
    return res.json({ msg: `task not fund!` }).status(404);
  }

  res.json(getTask).status(200);
}

// update task
export async function updateTask(req, res) {
  let updateTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updateTask) {
    res.json({ msg: "can't update the given task!" }).status(400);
  }

  res.json(updateTask).status(201);
}

// delete task
export async function deleteTask(req, res) {
  let deleteTask = await Tasks.findByIdAndDelete(req.params.id);

  res.json(deleteTask).status(200);
}

// search task
export async function searchTask(req, res) {
  const searchQuery = req.query.query;

  if (!searchQuery) {
    return res.json({ msg: "Missing search query" }).status(400);
  }

  try {
    const tasks = await Tasks.find({
      title: { $regex: searchQuery, $options: "i" },
    });

    res.json(tasks).status(200);
  } catch (err) {
    res.json({ msg: err.message }).status(500);
  }
}

// add seed task data
export async function addSeedTask(req, res) {
  try {
    await Tasks.deleteMany({});
    const addSeedTask = await Tasks.insertMany(seedTasks);

    res
      .json({
        message: "Seed task added!",
        data: addSeedTask,
      })
      .status(201);
  } catch (err) {
    console.error("Error adding seed tasks:", err);
  }
}
