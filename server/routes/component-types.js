const express = require('express');
const router = express.Router();
const { save, get, getOne } = require('../controllers/component-types');

router.get('/:id', getOne);
router.get('/', get);
router.post('/', save);

module.exports = router;
