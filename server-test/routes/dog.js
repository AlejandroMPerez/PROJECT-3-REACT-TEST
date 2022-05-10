var express = require('express');
const Dog = require('../models/Dog.Model');
var router = express.Router();

/* GET dog page. */
router.get('/', function(req, res, next) {
  res.json("DOGS");
});

router.get("/all-dogs", (req, res) => {
    Dog.find()
      .then((allDogs) => {
          res.json(allDogs)
      })
      .catch((err) => {
          res.json("Failed to find all dogs", err.message)
      })

});

router.post("/create", (req, res) => {
    Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        color: req.body.color,
        weight: req.body.weight,
    })
        .then((createdDog) => {
            res.json(createdDog)
        })
        .catch((err) => {
            res.json("Failed to create dog", err.message)
        })
})


module.exports = router;