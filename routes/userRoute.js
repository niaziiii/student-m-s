const express = require('express');
const userController = require('../controller/userController.js');
const userRouter = express.Router();


userRouter.post('/login', userController.loginUser);
userRouter.post('/islogged', userController.protect);



userRouter
    .route('/user')
    .get(userController.allUsers)
    .post(userController.createUser)


userRouter
    .route('/user/:id')
    .get(userController.getUser)
    .post(userController.updateUser);





module.exports = userRouter;