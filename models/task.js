const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    is_completed: {
        type: Boolean,
        default: false
    },
    assignedUserEmail: String
})

module.exports = mongoose.model('Task', taskSchema);