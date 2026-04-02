const { Router } = require('express')
const userController = require('../controllers/userController')
const userRouter = Router()

userRouter.get('/', userController.userMessagesGet)
userRouter.get('/new', userController.userMessagesCreateGet)
userRouter.post('/new', userController.userMessagesCreate)
userRouter.get('/details/:id', userController.getMessageDetails)

module.exports = userRouter