import { dealController } from '../controllers'
const expressJoi = require('express-joi-validator');
import dealValidation from '../controllers/deal/deal.validation'
import { verifyToken } from '../middleware/authenticate'
module.exports = (app) => {
    app.get('/deals',verifyToken, dealController.getAllDeals)
    app.post('/deal/add',verifyToken,  expressJoi(dealValidation.addDeal), dealController.addDeal),
    app.put('/deal/:id', dealController.updateDeal)
    app.delete('/deal/:id', dealController.deleteDeal)
}