const express = require('express');
const router = express.Router();
const { getById, update } = require('../controllers/component-attribute-values');

router.get('/:valueId', getById);
router.put('/:componentValueId', update);

module.exports = router;