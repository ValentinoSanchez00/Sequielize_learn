const Films= require("../bd/modelsfilms/filmsModel")

const getallfilms = async () => {
    console.log("llega a servicio")
    const allFilms = await Films.findAll();
    return allFilms
}

const createFilm=async(newFilm)=>{
    try {
        const createFilm=Films.create(newFilm)
        return createFilm
    } catch (error) {
     console.log(error.error[0].message)   
     return error.error[0].message  
    }
   


}




module.exports = {
    getallfilms,
    createFilm
   
}