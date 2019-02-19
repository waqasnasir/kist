import { Deal } from '../../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op
module.exports = {
    getAllDeals: async (req, res) => {
        try {
            const deals = await Deal.findAll({ where: { owner_id: req.userId } })
            return res.status(200).send({ success: true, data: deals })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    getDealsByCustomerId: async (req, res) => {
        try {
            const customer_id = req.params.id;
            const deals = await Deal.findAll({ where: { customer_id } })
            return res.status(200).send({ success: true, data: deals })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    addDeal: async (req, res) => {
        const { item='', item_price=0, total_price=0, advance=0, monthly_installment =0, item_description = '',gaurantor_mbl = '',gaurantor_name ='', gaurantor_address = '',customer_id } = req.body
        const deal = {
            item,
            item_price,
            total_price,
            advance,
            monthly_installment,
            item_description,
            gaurantor_mbl,
            gaurantor_name,
            gaurantor_address,
            customer_id,
            owner_id: req.userId
        }
        try {
            const newDeal = await Deal.create(deal)
            if (!newDeal) return res.status(200).send({ success: false, message: "could not add deal" })
            return res.status(200).send({ success: true, message: "Deal has been added successfully", deal: newDeal })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    updateDeal: async (req, res) => {
        const dealId = req.params.id
        try {
            const deal = await Deal.find({ where: { id: dealId } })
            const updatedDeal = await deal.update(req.body)
            if (!updatedDeal) return res.status(200).send({ success: false, message: "could not update the deal" })
            return res.status(200).send({ success: true, message: "Deal has been updated successfully", deal: updatedDeal })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    },
    deleteDeal: async (req, res) => {
        const dealId = req.params.id
        try {
            const deal = await Deal.find({ where: { id: dealId } })
            if (!deal) return res.status(200).send({ success: false, message: "could not find deal with the given id" })

            const deletedDeal = await deal.destroy()
            if (!deletedDeal) return res.status(200).send({ success: false, message: "could not delete the deal" })
            return res.status(200).send({ success: true, message: "Deal has been deleted successfully", deal: deletedDeal })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ success: false, message: "Internal Server error", error: error.errors.message.toString() })
        }
    }

}