const express = require('express');
const router = express.Router();
const { save } = require('../controllers/configurations');

router.post('/', save);

module.exports = router;