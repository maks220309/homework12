const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/route')
const path = require('path')
require('dotenv').config()
const a = process.env.U_RL
console.log(a)
mongoose
  .connect(a, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => { console.log('connected to DB') })
  .catch(error => { console.log(error) })
const app = express()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'styles')))
app.use(express.json())
app.use(userRoutes)
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.listen(3000, () => {
  console.log('Server started on port 3000');
});