const routes = require("express").Router();

const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");
const SessionController = require("./controllers/SessionController");

// User route:

routes.get("/index", UserController.index);
routes.post("/create", UserController.create);

// Login route:

routes.post("/login", LoginController.Login);

// Session route:

routes.get("/session", SessionController.Session)

module.exports = routes;