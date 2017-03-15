const { ComponentAttributeValue } = require('../models');

module.exports = {
  async save(
    {
      body: {
        attributeValue: { title, fields }
      }
    },
    res) {
    try {
      res.json({});
    } catch (e) {
      res.json(e, 500);
    }
  },

  async getById(req, res) {
    try {
      const valueId = req.params.valueId;
      const componentValue = await ComponentAttributeValue.findById(valueId, {
        attributes: ['id', 'value', 'attributeId', 'componentId']
      });
      const attributeValue = {
        id: componentValue.id,
        value: componentValue.id,
        attribute: componentValue.attributeId,
        component: componentValue.componentId
      };

      res.json({ attributeValue })
    } catch (e) {
      res.json(e);
    }
  }
};
