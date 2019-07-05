const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  isDeleted: Number
});


module.exports = mongoose.model('Todo',bookSchema);
