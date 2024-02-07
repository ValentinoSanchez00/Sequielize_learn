const filmService=require("../services/filmservice");

const getallfilms= async(req, res) => {
    console.log("llega al controller")
   const allFilms= await filmService.getallfilms()
   res.json(allFilms)
 
}


module.exports={
    getallfilms,
 
}