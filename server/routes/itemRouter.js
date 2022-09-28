const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.post('/', itemController.create)
router.get('/', itemController.getAll)
router.post('/type', itemController.getItemsByParams)
router.get('/:id', itemController.getOne)
router.post('/update/', itemController.findOneAndUpdate)
module.exports = router

function dsd() {
    fdf
}