const express = require('express');
const router = express.Router();
const { save, get } = require('../controllers/components');

/* GET components listing. */
router.get('/', get);
router.post('/', save);

module.exports = router;
