const User = require("../models/user.js");

// Create new user
exports.createUser = async (req, res) => {
    try {
        let {name, password, email, role} = req.body;
        //find existing account
        await User.findOne({email: email}).exec((err, user) => {
            if(err){
                res.status(500).json("An error occured");
            }
            if (user){
                return res.status(201).json("User with existing email already exist.")
            }
        })

        const newUser = {
            name: name,
            email: email,
            password: password,
            role: role
        }
        //create new user account
        const user = new User(newUser)
        //save user details
        await user.save((err, user) => {
            if(err){
                console.log(err)
            } else {
                console.log("user", user);
                return res.status(200).send("New user is succesfully created!");
            }
        })
    } catch (error) {
        console.log("error", error)
    }
}
//get user id
exports.userId = async (req, res) => {
    User.findById(req.params.userId).exec((err, user) => {
        if(err){
            res.status(500).json(err)
        }else{
            console.log("UserId fetch")
            req.user = user;
            // return user;
        }
    })
}

exports.getUser = async (req, res) => {
    await User.findById(req.params.userId).exec((err, user) => {
        if(err){
            console.log(err)
            return
        }else{
            return res.status(201).json(user);
        }
    })
}