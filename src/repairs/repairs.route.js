const express=require('express')

//constrolers
const repairsController =require('./repairs.controllers')


const router = express.Router()

router.get('/repairs', repairsController.findAll)

router.post('/repairs', repairsController.create)

router.get('/repairs/:id', repairsController.findOne)

router.patch("/repairs/:id", repairsController.update)

router.delete("/repairs/:id", repairsController.deleteRepairs)


module.exports =router  