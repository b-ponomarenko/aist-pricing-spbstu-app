const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  component: { type: mongoose.Schema.Types.ObjectId, ref: 'Component' }
}, { strict: false });

module.exports = mongoose.model('ComponentType', schema);