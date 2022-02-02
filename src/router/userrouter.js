const express = require('express');
const router = new express.Router();
// const session = require('express-session')
// const cookieParser = require('cookie-parser')

// router.use(cookieParser(process.env.SECRET_KEY))
// router.use(session({
//     secret: process.env.SECRET_KEY,
//     maxAge: 3600000,///// 2 weeks
//     resave: true,
//     saveUninitialized: true
// }))

const userController = require("../controller/usercontroller")
const verifyToken =  require ("../middleware/auth.js")

router.post("/signup", userController.addsignupData);
router.post("/login", userController.addLoginData);
// router.get('/logout', userController.getLogout);
router.get("/userlist/:role", verifyToken,  userController.getUser)

module.exports = router;