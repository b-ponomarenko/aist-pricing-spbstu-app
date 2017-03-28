const express = require('express');
const router = express.Router();
const {
  save,
  getById,
  get,
  deleteById,
  update
} = require('../controllers/attributes');

router.get('/', get);
router.get('/:attributeId', getById);
router.put('/:attributeId', update);
router.post('/', save);
router.delete('/:attributeId', deleteById);

module.exports = router;
