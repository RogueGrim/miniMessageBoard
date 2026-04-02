const { Router } = require('express')
const userController = require('../controllers/userController')
const userRouter = Router()

userRouter.get('/', userController.userMessagesGet)
userRouter.get('/new', userController.userMessagesCreateGet)
userRouter.post('/new', userController.userMessagesCreate)

module.exports = userRouter