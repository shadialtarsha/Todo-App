const db = require("../models");

exports.getTodos = (req, res) => {
    db.Todo.find({}).then(function(todos) {
        res.json(todos);
    }).catch(function(err) {
        res.send(err);
    });
}

exports.createTodo = (req, res) => {
    res.json(req.body);
    db.Todo.create(req.body)
        .then(function(newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function(err) {
            res.send(err);
        });
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then(function(foundTodo) {
            res.json(foundTodo);
        })
        .catch(function(err) {
            res.send(err);
        })
}

exports.updateTodo = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
        .then(function(foundTodo) {
            res.json(foundTodo);
        })
        .catch(function(err) {
            res.send(err);
        });
}

exports.deleteTodo = (req, res) => {
    db.Todo.findByIdAndRemove(req.params.todoId)
        .then(function(deleteTodo) {
            res.json({ message: "Delete is done" });
        })
        .catch(function(err) {
            res.send(err);
        });
}

module.exports = exports;