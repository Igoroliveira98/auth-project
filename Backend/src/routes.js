const routes = require("express").Router();

const UserController = require("./controllers/UserController");

routes.get("/index", UserController.index);
routes.post("/create", UserController.create);


module.exports = routes;