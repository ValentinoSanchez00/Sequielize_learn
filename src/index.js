const express = require("express");
const sequelize=require("./bd/modelsfilms/filmsModel");
const { Sequelize } = require("sequelize");

const app = express();
app.get("/",(req,res) => { res.send("Nos hemos conectado")})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escucahndo en puerto ${PORT} 😎`)
    sequelize
    .sync({force:true})
    .then(() => console.log("Conexion a la base de datos peliculas conectada con exito 👌👌"))
    .catch((error) =>console.log("Error: "+error+"✖✖") )
})