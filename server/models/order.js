const {Schema, model} = require('mongoose');

const schema = new Schema({
  id: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String,},
  deliveryMethod: {type: String, required: true},
  NPpoint: {type: String},
  city: {type: String},
  payMethod: {type: String},
  orderItems: {type: String},
  totalPrice: {type: String}
  
})

module.exports = model('Order', schema)