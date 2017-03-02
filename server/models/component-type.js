const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: { type: Number, ref: 'Component' }
}, { strict: false });

module.exports = mongoose.model('ComponentType', schema);