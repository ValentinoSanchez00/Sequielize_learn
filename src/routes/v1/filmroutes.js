const router = require("express").Router();



const filmsController=require("../../controllers/filmcontroller");

router.get("/", filmsController.getallfilms)





module.exports=router;