const User = require("../models/user.js");

exports.authSuperAdmin = async (req, res, next) => {
    let user = await User.findById(req.params.userId);
    if(user.role == "superAdmin"){
        next();
    }else{
        res.status(500).json("User not authorized to perform this action");
    }
}