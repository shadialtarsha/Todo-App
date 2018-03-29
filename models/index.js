const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos-api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");