import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      maxLength: [150, "Title can't exceed 150 characters"],
      required: [true, "You must provide a title for the task"],
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: [true, "You must specify the task status"],
      enum: ["open", "in progress", "completed", "on hold"],
      default: "open",
      index: true,
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "medium",
      index: true,
    },
    dueDate: {
      type: Date,
      validate: {
        validator: function (date) {
          return date >= Date.now();
        },
        message: "You can't use the passed date!",
      },
      index: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Task must be assign to a user"],
      index: true,
    },
    createdDate: { type: Date, default: Date.now, immutable: true },
    updateDate: { type: Date },
  },
  {
    timestamps: true,
    index: { title: "text", description: "text" },
  }
);

export default mongoose.model("Tasks", taskSchema);
