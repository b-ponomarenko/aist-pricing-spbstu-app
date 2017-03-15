const express = require('express');
const router = express.Router();
const { getById } = require('../controllers/component-attribute-values');

router.get('/:valueId', getById);

module.exports = router;