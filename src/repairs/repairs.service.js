const Repairs=require('./repairs.model')

class RepairsServices{

    static async findAll(){
        return await Repairs.findAll({
            where:{
                status: ["pending","completed"]
            }
        })
    }

    static async create(data){
        return await Repairs.create(data)
    } 

    static async findOne(id){
        return await Repairs.findOne({
            where:{
                id: id,
                status:"pending"
            }
        })
    }

    static async update(repair, data){
        return await repair.update(data)
    }

    static async delete(repair){
        return await repair.update({
            status: 'cancelled'
        })
    }
}

module.exports=RepairsServices