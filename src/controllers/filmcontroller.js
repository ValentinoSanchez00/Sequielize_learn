const filmService=require("../services/filmservice");

const getallfilms= async(req, res) => {
    console.log("llega al controller")
   const allFilms= await filmService.getallfilms()
   res.json(allFilms)
 
}
const createAllfilms=async(req,res)=>{
const createFilm=await filmService.createFilm(req.body)
res.json(createFilm)
}


module.exports={
    getallfilms,
    createAllfilms
 
}