import express from "express";
import Comments from "../models/commentSchema.mjs";

const router = express.Router();

// create
router.post("/", async (req, res) => {
  let newComment = await new Comments(req.body);
  await newComment.save();
  res.json(newComment).status(201);
});

// readAll
router.get("/", async (req, res) => {
  let getComments = await Comments.find({});
  res.json(getComments).status(200);
});

// read by id
router.get("/:id", async (req, res) => {
  let getComment = await Comments.findById(req.params.id);

  if (!getComment) {
    return res.json({ msg: `task not fund!` }).status(404);
  }

  res.json(getComment).status(200);
});

// update
router.put("/:id", async (req, res) => {
  let updateComment = await Comments.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updateComment) {
    res.json({ msg: "can't update the given task!" }).status(400);
  }

  res.json(updateComment).status(201);
});

// delete
router.delete("/:id", async (req, res) => {
  let deleteComment = await Comments.findByIdAndDelete(req.params.id);

  res.json(deleteComment).status(200);
});

export default router;
