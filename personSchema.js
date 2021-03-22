
const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
     
    },
    age: {
      type:Number,
      required: true,
    },
     favoriteFoods: {
      type:[],
     
    }
  })
  module.exports = mongoose.model('Person', PersonSchema)