import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please provide a comment"],
      trim: true,
      minlength: [1, "Comment cannot be empty"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Comment must have an author"],
      index: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: [true, "Comment must belong to a task"],
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  // { timestamps: true }
);

export default mongoose.model("Comments", commentSchema);
