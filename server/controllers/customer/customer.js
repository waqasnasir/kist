import { Customer, User } from '../../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op
module.exports = {
    getAllCustomers: async (req, res) => {
        try {
            const customers = await Customer.findAll({ where: { owner_id: req.userId } })
            return res.status(200).send({ success: true, data: customers })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    addCustomer: async (req, res) => {
        const { name, cnic, phone, address = '' } = req.body
        const customer = {
            name,
            cnic,
            phone,
            address,
            owner_id: req.userId
        }
        try {
            const existingCustomer = await Customer.findOne({ where: { [Op.or]: [{ phone }, { cnic }] }, attributes: ['cnic'] })
            if (existingCustomer) return res.status(200).send({ success: false, message: "Customer with same phone number or cnic already exist" })
            const newCustomer = await Customer.create(customer)
            if (!newCustomer) return res.status(200).send({ success: false, message: "could not add customer" })
            return res.status(200).send({ success: true, message: "Customer has been added successfully", customer: newCustomer })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }

    },
    updateCustomer: async (req, res) => {
        const customerId = req.params.id
        const { cnic, phone } = req.body
        try {
            const customer = await Customer.find({ where: { id: customerId } })
            if (!customer) return res.status(200).send({ success: false, message: "could not find customer with the given id" })
            const existingCustomer = await Customer.findOne({ where: { [Op.or]: [{ phone }, { cnic }] }, attributes: ['id','cnic'] })
            console.log(existingCustomer.id, customerId)
            if (existingCustomer && existingCustomer.id != customerId) return res.status(200).send({ success: false, message: "Customer with same phone number or cnic already exist" })
           
            const updatedCustomer = await customer.update(req.body)
            if (!updatedCustomer) return res.status(200).send({ success: false, message: "could not update the customer" })
            return res.status(200).send({ success: true, message: "Customer has been updated successfully", customer: updatedCustomer })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    deleteCustomer: async (req, res) => {
        const customerId = req.params.id
        try {
            const customer = await Customer.find({ where: { id: customerId } })
            if (!customer) return res.status(200).send({ success: false, message: "could not find customer with the given id" })
           
            const deletedCustomer = await customer.destroy()
            if (!deletedCustomer) return res.status(200).send({ success: false, message: "could not delete the customer" })
            return res.status(200).send({ success: true, message: "Customer has been deleted successfully", customer: deletedCustomer })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    }

}