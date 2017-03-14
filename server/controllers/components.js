const { Component, ComponentAttributeValue } = require('../models');

module.exports = {
  async getById(req, res, next) {
    try {
      let component = await Component
        .findById(req.params.componentId, {
          attributes: ['id', 'title'],
          include: [{
            model: ComponentAttributeValue,
            as: 'values',
            attributes: ['id', 'value', 'attributeId']
          }]
        });

      return res.json({ component });
    } catch (e) {
      return res.send(e);
    }
  },

  async save(
    {
      body: {
        component: { title, values, category }
      }
    },
    res) {
    try {
      let component = await Component.create({ title, categoryId: category });
      values = await Promise.all(values.map(async ({ attribute, value }) => {
        const componentAttributeValue = await ComponentAttributeValue.create({
          value,
          attributeId: attribute,
          componentId: component.id
        });
        return {
          attributeId: attribute,
          id: componentAttributeValue.id,
          value: componentAttributeValue.value
        }
      }));
      component = {
        // values,
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
