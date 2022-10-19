const CheckedList = require("../models/CheckedList.model");
const express = require('express')
const router = express.Router();

router.post('/', (req, res, next) => {
  const { countryName, counrtyAlpha3Code } = req.body
  CheckedList.findOne({ countryName })
    .then((foundCountry) => {
      if (foundCountry) {
        res.status(400).json({ message: "The country is already checked." });
        return;
      }
      return CheckedList.create({ countryName, counrtyAlpha3Code });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Oh no! Server Error" })
    });
});

router.get('/', (req, res, next) => {
  CheckedList.find()
    .then(countries => {
      res.status(200).json(countries)
    })
    .catch(err => next(err))
});

module.exports = router;

