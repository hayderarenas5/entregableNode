const {Sequelize}=require('sequelize')
const { envs } = require('../enviroments/enviroments')

const sequelize=new Sequelize(envs.DB_URI, {
    logging: false
})

 const authenticated=async()=>{
    try {
        await sequelize.authenticate();
        console.log("Connection has been stablished successfully. :)");
    } catch (error) {
        console.log(error);
    }
}

const syncUp=async()=>{
    try {
        await sequelize.sync()
        console.log("Connection has been synced seccessfully. :)");
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    sequelize,
    syncUp,
    authenticated
}