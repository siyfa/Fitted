const Task = require("../models/task.js");

//create task
exports.createTask = async(req, res) => {
    try{
        const newTask = {
            title: req.body.title,
            is_completed: true,
            assignedUserEmail: req.body.email
        }
    
        const task = new Task(newTask);
        //save new task
        await task.save((err, task)=> {
            if(err){
                return res.status(500).json("An error has occured");
            }else{
                return res.status(201).json("A new task is created")
            }
        })
    }
    catch (err){
        console.log(err)
    }
}
//get a task by id 
exports.getTask = async(req, res)=> {
    try{
        const task = await Task.findById(req.params.taskId);

        if(task){
            res.status(201).json(task)
        }else{
            res.status(404).json("No task found");
        }
    }
    catch(err){
        console.log(err)
    }
}
// List all tasks
exports.getTasks = async (req,res) => {
    try{
        await Task.find().exec((err, tasks)=> {
            if(err){
                return res.status(500).json("An error has occured");
            }else{
                return res.status(201).json(tasks)
            }
        })
    }
    catch(err){
        console.log(err)
    }
}
//delete a task by Id
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json("Task not found")
        }else{
            await Task.deleteOne({id: req.params.id}).exec((err, task)=> {
                if(err){
                    console.log(err)
                    return res.status(500).json("An error occured");
                }else{
                    return res.status(204)
                }
            })
        }
    }
    catch(err){
        console.log(err)
    }
}
//delete all task in the DB
exports.deleteTasks = async (req, res) => {
    try{
        await Task.deleteALl().exec((err, tasks) => {
            if(err){
                console.log(err)
                return res.status(500).json("An error occured");
            }else{
                return res.status(204)
            }
        })
    }
    catch(err){
        console.log(err)
    }
}
//Edit task
exports.editTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json("There is no task at that id")
        }else{
            await Task.updateOne({id: req.params.id}, {$set: {title: req.body.title}}).exec((err,task) => {
                if(err){
                    console.log(err)
                }else{
                    res.status(204)
                }
            })
        }
    }
    catch(err){
        console.log(err)
    }
}

//Bulk add tasks
exports.addTasks = async (req, res) => {
    const  tasksDetails = [
        {title: "Test Task 1", is_completed: true},
        {title: "Test Task 2", is_completed: false},
        {title: "Test Task 3", is_completed: true}
     ]

    try{
        const tasks = Task.issertMany(tasksDetails);
        tasks.save((err, tasks) => {
            res.status(202).json(tasks._id)
        })
    }
    catch(err){
        console.log(err)
    }
}