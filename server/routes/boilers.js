const express = require('express');
const router = express.Router();
const {
  save,
  getById,
  get,
  // deleteById,
  // update
} = require('../controllers/boilers');

router.get('/', get);
router.get('/:boilerId', getById);
// router.put('/:boilerId', update);
router.post('/', save);
// router.delete('/:attributeId', deleteById);

module.exports = router;
