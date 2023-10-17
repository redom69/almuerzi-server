const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    name: String,
    desc: String
})

const Meals = mongoose.model('Meal', mealSchema);

module.exports = Meals