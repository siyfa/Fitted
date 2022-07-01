const express = require("express");
const router = express();
const { createUser,userId, getUser} = require("../controllers/user.js");
const {createTask, getTasks, getTask, deleteTask, deleteTasks, addTasks} = require("../controllers/task.js");
const {authSuperAdmin} = require("../helpers/auth.js");

//create new user
router.post('/new/user', createUser);
//get a user
router.get('/user/:userId', authSuperAdmin, getUser);
//create a task
router.post('/task/:userId', authSuperAdmin, createTask);
//List all tasks
router.get('/tasks/:userId', authSuperAdmin, getTasks);
//Get a task
router.get('/task/:userId/:taskId', authSuperAdmin, getTask);
//delete a task
router.delete('/tasks/:userId/:taskId', authSuperAdmin, deleteTask);
//delete all task
router.delete('/tasks/:userId/', authSuperAdmin, deleteTasks);
//Edit task
router.put('/task/:userId/:taskId', authSuperAdmin, createTask);
//add tasks
router.post('/tasks/:userId', authSuperAdmin, addTasks);

module.exports = router;