const express = require('express');
const router = express.Router();
const { save, get } = require('../controllers/component-types');

router.get('/', get);
router.post('/', save);

module.exports = router;
