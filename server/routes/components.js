const express = require('express');
const router = express.Router();
const {
  save,
  getById,
  saveComponentValue,
  update,
  updateComponentValue,
  deleteById
} = require('../controllers/components');

router.get('/:componentId', getById);
router.put('/:componentId', update);
router.post('/:componentId/attribute-values', saveComponentValue);
router.put('/:componentId/attribute-values/:componentValueId', updateComponentValue);
router.post('/', save);
router.delete('/:componentId', deleteById);

module.exports = router;
