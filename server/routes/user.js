import { userController } from '../controllers'
const expressJoi = require('express-joi-validator');
import userValidation from '../controllers/user/user.validation'
import { verifyToken } from '../middleware/authenticate'
module.exports = (app) => {
    app.get('/users',verifyToken, userController.getAllUsers)
    app.get('/user/email-verification', userController.verify)
    app.get('/user/reset-password', userController.resetPassword)
    app.post('/user/signin', expressJoi(userValidation.signin), userController.signin)
    app.post('/user/signup',expressJoi(userValidation.signup),userController.signup)
}