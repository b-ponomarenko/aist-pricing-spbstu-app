const { Component, ComponentAttributeValue } = require('../models');

module.exports = {
  async saveComponentValue(req, res) {
    const { attribute, value } = req.body.attributeValue;
    try {
      const componentId = req.params.componentId;
      const attributeValue = await ComponentAttributeValue.create({
        componentId,
        value,
        attributeId: attribute
      });
      res.json({ attributeValue });
    } catch (e) {
      res.json(e, 500);
    }
  },

  async getById(req, res, next) {
    try {
      let component = await Component
        .findById(req.params.componentId, {
          attributes: ['id', 'title'],
          include: [{
            model: ComponentAttributeValue,
            as: 'values'
          }]
        });

      return res.json({ component });
    } catch (e) {
      return res.send(e, 500);
    }
  },

  async save(
    {
      body: {
        component: { title, category }
      }
    },
    res) {
    try {
      let component = await Component.create({ title, categoryId: category });
      component = {
        category,
        id: component.id,
        title: component.title
      };
      res.json({ component });
    } catch (e) {
      res.json(e, 500);
    }
  }
};
