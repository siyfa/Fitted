const express = require("express");
const router = express();
const {authSuperAdmin} = require("../helpers/auth.js");
const {createTask, addTasks} = require("../controllers/task.js")

//create task
router.post('/task', authSuperAdmin, createTask);
router.post('/tasks', addTasks);

module.exports = router;