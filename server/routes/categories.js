const express = require('express');
const router = express.Router();
const { save, get, getById, deleteById } = require('../controllers/categories');

router.get('/', get);
router.get('/:categoryId', getById);
router.post('/', save);
router.delete('/:categoryId', deleteById);

module.exports = router;
