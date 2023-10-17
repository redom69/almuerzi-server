const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    meal_id: { type: Schema.Types.ObjectId, ref: 'Meal' },
    user_id: String
})

const Orders = mongoose.model('Order', orderSchema);

module.exports = Orders