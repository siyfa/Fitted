const express = require("express");
const router = express();
const { createUser,userId, getUser} = require("../controllers/user.js");
const {authSuperAdmin} = require("../helpers/auth.js");

router.post('/new/user', createUser);
router.get('/user/:userId', authSuperAdmin, getUser);


module.exports = router;