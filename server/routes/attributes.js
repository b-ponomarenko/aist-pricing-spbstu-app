const express = require('express');
const router = express.Router();
const { save, getById } = require('../controllers/attributes');

router.get('/:attributeId', getById);
router.post('/', save);

module.exports = router;
