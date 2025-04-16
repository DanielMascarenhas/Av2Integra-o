const userServ = require('../services/userService');

exports.funcHello = async (req, res) => {
  res.send("Hello World!");
};

exports.funcGetTasks = userServ.getAllTasks;

exports.funcGetTaskId = userServ.getTaskById;

exports.funcPostTask = userServ.postTask;

exports.funcDeleteTask = userServ.DeleteTask;


