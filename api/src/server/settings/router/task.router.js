const { Router } = require("express");
const {validateUser} = require("../middleware/User/ValidateUser.middleware");
const createTask = require("../controllers/Task/createTask.controller");
const allTasks=require("../controllers/Task/allTasks.controller");



const taskRouter = Router();

taskRouter.post("/create", validateUser, createTask)
taskRouter.get("/search_all", validateUser, allTasks);
taskRouter.get("/search_all", validateUser, allTasks);

module.exports = taskRouter;