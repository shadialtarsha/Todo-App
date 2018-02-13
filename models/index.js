const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://admin:admin@ds235328.mlab.com:35328/todos-api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");