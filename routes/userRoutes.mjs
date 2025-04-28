import express from "express";
import Users from "../models/userSchema.mjs";

const router = express.Router();

// create
router.post("/", async (req, res) => {
  let newUser = await new Users(req.body);
  await newUser.save();
  res.json(newUser).status(201);
});

// readAll
router.get("/", async (req, res) => {
  let getUsers = await Users.find({});
  res.json(getUsers).status(200);
});

// read by id
router.get("/:id", async (req, res) => {
  let getUser = await Users.findById(req.params.id);

  if (!getUser) {
    return res.json({ message: `user not fund` }).status(404);
  }

  res.json(getUser).status(200);
});

// update

// delete

export default router;
