import mongoose from "mongoose";

const seedTasks = [
  {
    title: "Implement User Authentication",
    description: "Set up Passport.js for user login and registration.",
    status: "in progress",
    priority: "high",
    dueDate: new Date("2025-05-26"),
    assignedTo: "680fe1c6af31d30bcb657a56",
  },
  {
    title: "Design Task List UI",
    description: "Create the frontend components for displaying tasks.",
    status: "open",
    priority: "medium",
    dueDate: new Date("2025-05-18"),
    assignedTo: "680feedb37cd77619f6fee14",
  },
  {
    title: "Write API Endpoints for Comments",
    description:
      "Develop the backend routes and logic for creating and retrieving comments.",
    status: "open",
    priority: "low",
    dueDate: new Date("2025-06-16"),
    assignedTo: "680ff67076ae25be69948d5d",
  },
];

export default seedTasks;
