const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: { type: Array, required: true }
});

module.exports = mongoose.model('Component', schema);