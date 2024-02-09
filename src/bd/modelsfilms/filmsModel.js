const sequelize= require("./bd")
const {Model,DataTypes}=require("sequelize");

class Film extends Model{}
Film.init(
{
id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
},
title:{
    type: DataTypes.STRING,
    allowNull: false, 
    unique:{
       agrs:true,
       msg:"Ya existe"
    }, 
    validate:{
        notEmpty:{
            msg:"El nombre es un campo obligatorio"
        }
    }
},
description:{
    type: DataTypes.STRING,

},
score:{
    type: DataTypes.INTEGER,

},
director:{
    type: DataTypes.STRING,

}
},
{
sequelize,
modelName:"film",

}


)
module.exports=Film;