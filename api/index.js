const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')


const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conexión exitosa a MongoDB");
    })
    .catch(error => {
        console.error("Error de conexión a MongoDB:", error);
    });

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)


module.exports = app