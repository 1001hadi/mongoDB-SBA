import Users from "../models/userSchema.mjs";

// create user
export async function createUser(req, res) {
  let newUser = await new Users(req.body);
  await newUser.save();
  res.json(newUser).status(201);
}

// get all users
export async function getAllUsers(req, res) {
  let getUsers = await Users.find({});
  res.json(getUsers).status(200);
}

// get specific user
export async function getUser(req, res) {
  let getUser = await Users.findById(req.params.id);

  if (!getUser) {
    return res.json({ msg: `user not fund` }).status(404);
  }

  res.json(getUser).status(200);
}

// update user
export async function updateUser(req, res) {
  let updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updateUser) {
    res.json({ msg: "can't update the given user!" }).status(400);
  }

  res.json(updateUser).status(201);
}

// delete user
export async function deleteUser(req, res) {
  let deleteUser = await Users.findByIdAndDelete(req.params.id);

  res.json(deleteUser).status(200);
}
