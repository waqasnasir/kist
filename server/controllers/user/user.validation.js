import Joi from 'joi'
 export default {
     signup: {
         body:{
            email: Joi.string().email({ minDomainAtoms: 2 }),
            password: Joi.string().alphanum().min(3).max(10).required(),
            username: Joi.string().alphanum().min(3).max(30).required(),
         }
     },
     signin: {
        body:{
           email: Joi.string().email({ minDomainAtoms: 2 }),
           password: Joi.string().alphanum().min(3).max(10).required(),
        }
    },
 };