const RepairsServices = require("./repairs.service")


exports.findAll= async(req, res)=>{
    try {
        const repairs= await RepairsServices.findAll()
        return res.status(200).json({
            message: "get- findAll - repairs",
            repairs
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
    
}

exports.create= async(req, res)=>{
    try {
        const {date, status, userId}= req.body

        const repairs= await RepairsServices.create({date, status, userId})
        return res.status(201).json({
            message: "create - repairs",
            data: repairs
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.findOne= async(req, res)=>{
    try {
        const {id}= req.params
        const repair = await RepairsServices.findOne(id)
        if(!repair){
            return res.status(404).json({
                status: 'error',
                message: `repair with id ${id} not found`
            })
        }
        return res.status(200).json({
            message: "findOne - repairs",
            repair
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.update=async(req, res)=>{
    try {
        const {id}= req.params
        const {date, status}=req.body
        const repair =await RepairsServices.findOne(id)
        if (!repair) {
            return res.status(404).json({
                status: 'error',
                message: `repair with id ${id} not found`
            })
        }
    
        const repairUpdate= await RepairsServices.update(repair,{
            date, status
        })
        return res.status(200).json({
            message: "update - repairs",
            repairUpdate
        })
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
   
}

exports.deleteRepairs= async(req, res)=>{
    try {
        const {id}= req.params
        const repair= await RepairsServices.findOne(id)

        if (!repair) {
            return res.status(404).json({
                status: 'error',
                message: `repair with id ${id} not found`
            })
        }

        await RepairsServices.delete(repair)
        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json({
            status:'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}
