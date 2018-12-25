import Joi from 'joi'
 export default {
     addDeal: {
         body:{
            customer_id: Joi.number().integer().required(),
            item: Joi.string().max(30).required(),
            item_price: Joi.number().required(),
            total_price: Joi.number().required(),
            advance: Joi.number().required(),
            monthly_installment: Joi.number().required(),
            gaurantor_mbl: Joi.string().regex(/^[0-9+]{11}$/),
            gaurantor_address: Joi.string().max(100),
            gaurantor_name: Joi.string().alphanum().min(3).max(30).optional(),
            item_description:Joi.string().optional(),
         }
     }
 };