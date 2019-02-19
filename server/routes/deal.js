import { dealController } from '../controllers'
import { paymentController } from '../controllers'
const expressJoi = require('express-joi-validator');
import dealValidation from '../controllers/deal/deal.validation'
import paymentValidation from '../controllers/payment/payment.validation'
import { verifyToken } from '../middleware/authenticate'
module.exports = (app) => {
    app.get('/deals', verifyToken, dealController.getAllDeals)
    app.get('/deals/customer/:id', verifyToken, dealController.getDealsByCustomerId)
    app.post('/deal/add', verifyToken, expressJoi(dealValidation.addDeal), dealController.addDeal),
        app.put('/deal/:id', verifyToken, dealController.updateDeal)
    app.delete('/deal/:id', verifyToken, dealController.deleteDeal)


    // installments crud
    app.get('/deal/:id/installments', verifyToken, paymentController.getInstallments)
    app.post('/deal/:id/installment', verifyToken, expressJoi(paymentValidation.addInstallment), paymentController.addInstallment)
    app.put('/installment/:id', verifyToken, paymentController.updateInstallment)
    app.delete('/installment/:id', verifyToken, paymentController.deleteInstallment)
}