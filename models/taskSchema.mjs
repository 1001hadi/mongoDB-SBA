import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {},
  description: {},
  status: {},
  priority: {},
  dueDate: {},
  assignedTo: {},
  createdBy: {},
  updateDate: {},
});

export default mongoose.model("Tasks", taskSchema);
