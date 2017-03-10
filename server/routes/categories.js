const express = require('express');
const router = express.Router();
const { save, get } = require('../controllers/categories');

router.get('/', get);
router.post('/', save);

module.exports = router;
