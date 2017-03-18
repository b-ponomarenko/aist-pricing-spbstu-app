const express = require('express');
const router = express.Router();
const { save, getById, get, deleteById } = require('../controllers/attributes');

router.get('/', get);
router.get('/:attributeId', getById);
router.post('/', save);
router.delete('/:attributeId', deleteById);

module.exports = router;
