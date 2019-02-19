import Joi from 'joi'
 export default {
     addCustomer: {
         body:{
            name: Joi.string().alphanum().min(3).max(30).required(),
            cnic:  Joi.string().regex(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/).required(),
            phone: Joi.string().regex(/^[0-9+]{11}$/).required(),
            address: Joi.string().max(100)
         }
     }
 };