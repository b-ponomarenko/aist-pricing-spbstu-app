const express = require('express');
const router = express.Router();
const { save, getById } = require('../controllers/components');

router.get('/:componentId', getById);
router.post('/', save);

module.exports = router;
