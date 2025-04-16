const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/tasks", userControl.funcGetTasks);
router.get("/tasks/:id", userControl.funcGetTaskId);
router.post("/tasks/", userControl.funcPostTask);
router.delete("/tasks/:id", userControl.funcDeleteTask);

module.exports = router;