import { customerController } from '../controllers'
const expressJoi = require('express-joi-validator');
import customerValidation from '../controllers/customer/customer.validation'
import { verifyToken } from '../middleware/authenticate'
module.exports = (app) => {
    app.get('/customers',verifyToken, customerController.getAllCustomers)
    app.post('/customer/add',verifyToken,  expressJoi(customerValidation.addCustomer), customerController.addCustomer),
    app.put('/customer/:id', customerController.updateCustomer)
    app.delete('/customer/:id', customerController.deleteCustomer)
}