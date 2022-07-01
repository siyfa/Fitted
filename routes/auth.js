const express = require("express");
const router = express();
const { createUser, getUser} = require("../controllers/user.js");
const {authSuperAdmin} = require("../helpers/auth.js");

router.post('/auth/create', createUser);
router.get('/user/:userId', authSuperAdmin, getUser);

module.exports = router;