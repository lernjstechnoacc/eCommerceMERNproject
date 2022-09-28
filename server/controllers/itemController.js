const uuid = require('uuid')
const path = require('path');
const Item = require('../models/Item');



class ItemController {
    async create(req, res) {
        try {
            let {lot} = req.body

            return res.json(lot)
        } catch (e) {
            console.log(e)
        }

    }
    /* async create(req, res) {
        try {
            let {name, price, descr, type, amount} = req.body
            const id = uuid.v4()
            const {images} =  await req.files
            const arrNameImg = images.map(img => {
                let fileName = uuid.v4() + ".jpg";
                img.mv(path.resolve(__dirname, '..', 'static', fileName));
                return fileName;
            })
            
            const item = new Item({id, name, price, descr, type, amount, images: arrNameImg});
            await item.save();

            return res.json(item)
        } catch (e) {
            console.log(e)
        }

    } */

    async getAll(req, res) {
        try {
            const items = await Item.find({})
            res.json(items)
          } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
          }
    }
    async getItemsByParams(req, res) {
        try {
            
            const items = await Item.find(req.body)
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

module.exports = new ItemController()