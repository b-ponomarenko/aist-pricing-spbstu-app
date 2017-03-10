const ComponentType = require('../models/component-type');
const Component = require('../models/component');

module.exports = {
  async getOne({params: { id }}, res, next) {
    try {
      const componentType = await ComponentType.findById(id);
      res.json(componentType);
    } catch (e) {
      res.json(e);
    }
  },
  async get(req, res, next) {
    const componentsTypes = await ComponentType.find();
    res.json({ componentsTypes });
  },
  async save({ body: { componentType } }, res, next) {
    let componentTypeInstance = new ComponentType(componentType);
    try {
      componentTypeInstance = await componentTypeInstance.save();
      const component = await Component.findById(componentType.component);
      component.componentTypes.push(componentTypeInstance._id);
      await component.save();
      res.json({ componentType: componentTypeInstance });
    } catch (e) {
      res.json(e);
    }
  }
};