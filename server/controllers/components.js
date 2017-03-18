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
          attributes: ['id', 'title', 'categoryId'],
          include: [{
            model: ComponentAttributeValue,
            as: 'values'
          }]
        });

      component = {
        id: component.id,
        title: component.title,
        values: component.values.map(value => {
          return {
            id: value.id,
            value: value.value,
            attribute: value.attributeId
          }
        }),
        category: component.categoryId
      };

      return res.json({ component });
    } catch (e) {
      return res.send(e, 500);
    }
  },

  async update(req, res) {
    try {
      let component = await Component.findById(req.params.componentId);
      component.set('title', req.body.component.title);
      await component.save();
      res.json({ component });
    } catch (e) {
      res.json(e);
    }
  },

  async updateComponentValue(req, res) {
    const componentId = req.params.componentId;
    const componentValueId = req.params.componentValueId;
    try {
      let attributeValue = await ComponentAttributeValue.findById(componentValueId);
      attributeValue.set('value', req.body.attributeValue.value);
      await attributeValue.save();
      res.json({ attributeValue });
    } catch (e) {
      res.json(e);
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
  },

  async deleteById(req, res) {
    try {
      await Component.destroy({
        where: {
          id: req.params.componentId
        }
      });
      res.json({});
    } catch (e) {
      res.json(e);
    }
  }
};
