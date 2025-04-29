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
    return res.json({ msg: `user not fund` }).status(404);
  }

  res.json(getUser).status(200);
});

// update
router.put("/:id", async (req, res) => {
  let updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updateUser) {
    res.json({ msg: "can't update the given user!" }).status(400);
  }

  res.json(updateUser).status(201);
});

// delete
router.delete("/:id", async (req, res) => {
  let deleteUser = await Users.findByIdAndDelete(req.params.id);

  res.json(deleteUser).status(200);
});

export default router;
