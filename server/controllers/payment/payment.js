import { Installment, Customer, Deal } from '../../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op
module.exports = {
    getInstallments: async (req, res) => {
        const dealId = req.params.id
        if (!dealId) return res.status(200).send({ success: false, message: 'Please provide the dealid' })
        try {
            const installments = await Installment.findAll({ where: { deal_id: dealId } })
            return res.status(200).send({ success: true, data: installments })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    addInstallment: async (req, res) => {
        const dealId = req.params.id
        const { amount, paid_at, customer_id } = req.body
        const installment = {
            amount,
            paid_at,
            customer_id,
            deal_id: dealId
        }
        try {
            // check if installment is against valid deal
            const deal = await Deal.findOne({where:{id:dealId}})
            if(!deal) return res.status(200).send({ success: false, message: "Deal not found" })
            // check if installment is from a valid customer
            const customer = await Customer.findOne({where:{id:customer_id}})
            if(!customer) return res.status(200).send({ success: false, message: "Customer not found" })
            // save the installment
            const newInstallment = await Installment.create(installment)
            if (!newInstallment) return res.status(200).send({ success: false, message: "could not add installment" })
            return res.status(200).send({ success: true, message: "installment has been added successfully", installment: newInstallment })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    updateInstallment: async (req, res) => {
        const installmentId = req.params.id
        try {
            const installment = await Installment.find({ where: { id: installmentId } })
            if (!installment) return res.status(200).send({ success: false, message: "could not find installment with the given id" })
            const updatedInstallment = await installment.update(req.body)
            if (!updatedInstallment) return res.status(200).send({ success: false, message: "could not update the installment" })
            return res.status(200).send({ success: true, message: "Installment has been updated successfully", installment: updatedInstallment })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }

    },
    deleteInstallment: async (req, res) => {
        const installmentId = req.params.id
        try {
            const installment = await Installment.find({ where: { id: installmentId } })
            if (!installment) return res.status(200).send({ success: false, message: "could not find installment with the given id" })

            const deletedInstallment = await installment.destroy()
            if (!deletedInstallment) return res.status(200).send({ success: false, message: "could not delete the installment" })
            return res.status(200).send({ success: true, message: "Installment has been deleted successfully", installment: deletedInstallment })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    }
}