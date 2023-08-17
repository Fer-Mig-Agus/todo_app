const { Router } = require("express");
const {validateUser}=require("../middleware/User/ValidateUser.middleware");
// const createUser = require("../controllers/user/createUser.controller");
// const allUsers = require("../controllers/user/allUsers.controller");

const registerUser = require("../controllers/user/registerUser.controller");
const login = require("../controllers/user/login.controller");
const confimarToken = require("../controllers/user/confimarToken.controller");
const googleLogin = require("../controllers/user/googleLogin.controller");
const olvidatePassword = require("../controllers/user/olvidatePassword.controller");
const comprobarToken = require("../controllers/user/comprobarToken.controller");
const newPasswordUser = require("../controllers/user/newPasswordUser.controller");
const getAllUser = require("../controllers/user/getAllUser.controller");
const getUserById = require("../controllers/user/getUserById.controller");

const userRouter = Router();

// userRouter.post("/create", createUser)
// userRouter.get("/search_all", allUsers);

//Para despues

userRouter.post("/register", registerUser);

userRouter.post("/login", login);

userRouter.get("/confirmar/:token", confimarToken);

userRouter.post("/google/login", googleLogin);

userRouter.get("/google/login_success", googleLogin);

userRouter.post("/olvidate_password", olvidatePassword);

userRouter.route("/olvidate_password/:token").get(comprobarToken).post(newPasswordUser);

userRouter.get("/", getAllUser);

userRouter.get("/:id_user", validateUser, getUserById);


module.exports = userRouter;