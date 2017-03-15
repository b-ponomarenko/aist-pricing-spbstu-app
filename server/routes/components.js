const express = require('express');
const router = express.Router();
const { save, getById, saveComponentValue } = require('../controllers/components');

router.get('/:componentId', getById);
router.post('/:componentId/attribute-values', saveComponentValue);
router.post('/', save);

module.exports = router;
