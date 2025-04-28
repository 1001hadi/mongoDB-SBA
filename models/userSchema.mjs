import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your first name"],
    trim: true,
    minLength: [3, "First name can't be less than 3 characters long"],
    maxLength: [20, "First name can't be more than 20 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
    trim: true,
    minLength: [3, "Last name can't be less than 3 characters long"],
    maxLength: [20, "Last name can't be more than 20 characters long"],
  },
  age: {
    type: Number,
    min: [18, "Must be over 18 to do the task!"],
    max: [65, "You don't need do this task, enjoy your retirement"],
    validate: {
      validator: Number.isInteger,
      message: "please enter your age!",
    },
  },
  username: {
    type: String,
    required: [true, "Username must provided"],
    trim: true,
    unique: true,
    minLength: [3, "Username can't be less than 3 characters long"],
    maxLength: [20, "Username can't be more than 20 characters long"],
    index: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Email address must be valid !"],
    index: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Users", userSchema);
