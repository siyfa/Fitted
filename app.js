const express = require("express");
const MongoDB = require("./helpers/mongoDb.js");

const app = express();

//configure and parse json
app.use(express.json());

//require route
app.use('/vi/', require("./routes/user.js"))
app.use('/vi/', require("./routes/task.js"))

app.use('/', (req, res) => {
    res.send("Home Page For FittedNG");
})

app.listen(3000, ()=> {
    console.log("Node Server running on Port 3000");
})

// Dev@fitted.ng
// softwareqa@fitted.ng