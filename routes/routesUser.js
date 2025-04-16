const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/tasks", userControl.funcGetUsers);
router.get("/tasks/:id", userControl.funcGetUserId);

module.exports = router;