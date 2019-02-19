import Joi from 'joi'
 export default {
     addInstallment: {
         body:{
            amount: Joi.number().integer().required(),
            customer_id:  Joi.number().integer().required(),
            paid_at: Joi.date(),
         }
     }
 };