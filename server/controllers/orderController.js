const uuid = require('uuid')
const path = require('path');
const Order = require('../models/Order');



class OrderController {
    
    async create(req, res) {
        try {
            const order = new Order({...req.body});
            await order.save();
            return res.json(order)
        } catch (e) {
            console.log(e)
        }

    }

    async getAll(req, res) {
        try {
            const items = await Item.find({})
            res.json(items)
          } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
          }
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne({id: id})
        

        return res.json(item)
    }

    async findOneAndUpdate(req, res) {
        console.log(req.body)
        const {id, amount} = req.body
        const item = await Item.findOneAndUpdate ({id: id}, {amount: amount}, {new: true})

        return res.json(item)
    }
}

module.exports = new OrderController()