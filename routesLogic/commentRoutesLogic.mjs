import Comments from "../models/commentSchema.mjs";

// create comment
export async function createComment(req, res) {
  let newComment = await new Comments(req.body);
  await newComment.save();
  res.json(newComment).status(201);
}

// get all comments
export async function getAllComments(req, res) {
  let getComments = await Comments.find({});
  res.json(getComments).status(200);
}

// get specific comment
export async function getComment(req, res) {
  let getComment = await Comments.findById(req.params.id);

  if (!getComment) {
    return res.json({ msg: `task not fund!` }).status(404);
  }

  res.json(getComment).status(200);
}

// update comment
export async function updateComment(req, res) {
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
}

// delete comment
export async function deleteComment(req, res) {
  let deleteComment = await Comments.findByIdAndDelete(req.params.id);

  res.json(deleteComment).status(200);
}
