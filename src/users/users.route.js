const express=require('express')

//constrolers
const {findAll, create, findOne, update, deleteUser} =require('./users.controllers')

const router = express.Router()

router.get('/users', findAll)

router.post('/users', create)

router.get('/users/:id', findOne)

router.patch("/users/:id", update)

router.delete("/users/:id", deleteUser)


module.exports =router  