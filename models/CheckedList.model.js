const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const checkedListSchema = new Schema(
{
  countryName: String,
  counrtyAlpha3Code: String
},
{
  timestamps: true
});


const CheckedList = model('CheckedList', checkedListSchema);
module.exports = CheckedList;