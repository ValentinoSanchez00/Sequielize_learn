const router = require("express").Router();



const filmsController=require("../../controllers/filmcontroller");

router.get("/", filmsController.getallfilms)
router.post("/", filmsController.createAllfilms)





module.exports=router;