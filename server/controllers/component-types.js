const ComponentType = require('../models/component-type');

module.exports = {
  async get(req, res, next) {
    const componentsTypes = await ComponentType.find();
    res.json({ componentsTypes });
  },
  async save({ body: { componentType } }, res, next) {
    let componentTypeInstance = new ComponentType(componentType);
    try {
      componentTypeInstance = await componentTypeInstance.save();
      res.json({ componentType: componentTypeInstance });
    } catch (e) {
      res.json(e);
    }
  }
};