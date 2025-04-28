import express from "express";
import Users from "../models/userSchema.mjs";

const router = express.Router();

// create
router.post("/", async (req, res) => {
  let newUser = await new Users(req.body);
  await newUser.save();
  res.json(newUser).status(201);
});

// read

// readAll

// update

// delete

export default router;
