const {DataTypes} =require('sequelize')
const { sequelize } = require('../config/database/database')

const Users= sequelize.define('user', {
    id: {
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    role:{
        type: DataTypes.ENUM('client','employee'),
        allowNull: false,
        defaultValue: 'client'
    },
    status:{
        type: DataTypes.ENUM('available', 'busy'),
        defaultValue: "available",
        allowNull:false
    }
})

module.exports= Users