const CheckedList = require("../models/CheckedList.model");
const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
  CheckedList.find()
    .then(countries => {
      res.status(200).json(countries)
    })
    .catch(err => next(err))
});

router.post('/', (req, res, next) => {
  const { countryName, counrtyAlpha3Code } = req.body
  CheckedList.create({ countryName, counrtyAlpha3Code })
    .then(country => {
      res.status(201).json(country)
    })
    .catch(err => next(err))
});

module.exports = router;
