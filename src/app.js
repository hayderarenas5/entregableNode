const express=require('express')
const users = require('./repairs/repairs.route')
const repairs = require('./users/users.route')

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', users)
app.use('/', repairs)

module.exports =app
