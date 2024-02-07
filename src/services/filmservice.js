const Films= require("../bd/modelsfilms/filmsModel")

const getallfilms = async () => {
    console.log("llega a servicio")
    const allFilms = await Films.findAll();
    return allFilms
}




module.exports = {
    getallfilms,
   
}