const mongoose = require("mongoose");

// Connect URL
const url = 'mongodb://127.0.0.1:27017/fitted';

// Connec to MongoDB
const MongoDB = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    console.log(`MongoDB Connected: ${url}`);
});

module.exports = MongoDB;