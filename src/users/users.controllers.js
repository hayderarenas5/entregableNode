const UsersServices = require("./user.service")



const findAll= async(req, res)=>{
    try {
        const user= await UsersServices.findAll()
        return res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const create= async(req, res)=>{
    try {
        const {name, email, password, role, status}=req.body

        const users= await UsersServices.create({name, email, password, role, status})
        return res.status(201).json({
            message: "create - users",
            users
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const findOne= async(req, res)=>{
    try {
        const {id}= req.params
        const user= await UsersServices.findOne(id)
        if(!user){
            return res.status(404).json({
                status: 'error',
                message: `user with id ${id} not found`
            })
        }
    return res.status(200).json({
        message: "findOne - users",
        user
    })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const update= async(req, res)=>{
    try {
        const {id}= req.params
        const user= await UsersServices.findOne(id)
        const {name, email, password, role, status}=req.body

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: `user with id ${id} not found`
            })
        }

        const userUpdate= await UsersServices.update(user, {
            name, email, password, role, status
        })
        return res.status(200).json({
            message: "update - users",
            userUpdate
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const deleteUser= async(req, res)=>{
    try {
        const {id}= req.params
        const user= await UsersServices.findOne(id)

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: `user with id ${id} not found`
            })
        }
        
        await UsersServices.delete(user)

        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

module.exports={
    findAll, create, findOne, update, deleteUser
}