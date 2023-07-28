const { Router } = require("express");
const createUser = require("../controllers/user/createUser.controller");
const allUsers = require("../controllers/user/allUsers.controller");

const userRouter = Router();

userRouter.post("/create", createUser)
userRouter.get("/search_all", allUsers);

module.exports = userRouter;