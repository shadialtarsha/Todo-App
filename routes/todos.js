var express = require("express");
var routes = express.Router();
var helpers = require("../helpers/todos");


routes.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

routes.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);


module.exports = routes;