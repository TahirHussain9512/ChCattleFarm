const express = require('express');

const { addAnimal, FindDataOfMonthOfAnimal, FindRefrence, updateSaler, SalerGetById, FindSaler, addOwner, FindCareTaker, addCareTaker, FindOwner, FindAnimalInformation, deleteAnimal, AnimalGetById, updateAnimal, addSaler, addRefrence } = require("../controllers/auth")

const router = express.Router()


// Post
router.post("/api/addAnimal", addAnimal);
router.post("/api/addCareTaker", addCareTaker);
router.post("/api/addOwner", addOwner);
router.post("/api/addSaler", addSaler);
router.post("/api/addRefrence", addRefrence); `  `

// Get
router.get("/api/findAnimalInformation/:filterDataText/:format", FindAnimalInformation);
router.get("/api/findCareTaker", FindCareTaker);
router.get("/api/findOwner", FindOwner);
router.get("/api/findRefrence", FindRefrence);
router.get("/api/findSaler", FindSaler);
router.get("/api/animalGetById/:id", AnimalGetById);
router.get("/api/salerGetById/:id", SalerGetById);
router.get("/api/findDataOfMonthOfAnimal", FindDataOfMonthOfAnimal);

// Put
router.put("/api/updateAnimal/:id", updateAnimal)
router.put("/api/updateSaler/:id", updateSaler)

//Delete 
router.delete("/api/deleteAnimal/:id", deleteAnimal);




// router.get("/getOne/:id", getOne);
// router.get("/clients", usersList);
// router.delete("/delete/:id", deleteOne);
// router.put("/update/:id",update)

module.exports = router;        