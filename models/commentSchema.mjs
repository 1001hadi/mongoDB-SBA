import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentTitle: {
    type: String,
    required: [true, "Comment must Provide!"],
    trim: true,
    minlength: [3, "Comment con't be less than 3 characters log"],
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Comment author must provide"],
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
    required: [true, "Comment must be belong to the task"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Comments", commentSchema);
