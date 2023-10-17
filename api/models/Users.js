const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    role: { type: String, defaul: 'user' } //admin
})

const Users = mongoose.model('User', usersSchema);

module.exports = Users