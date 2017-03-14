const { Category, Component, CategoryAttribute } = require('../models');

module.exports = {
  async get(req, res, next) {
    try {
      let categories = await Category
        .findAll({
          include: [{
            model: Component,
            as: 'components'
          }, {
            model: CategoryAttribute,
            as: 'attributes',
            attributes: ['attributeId']
          }]
        });

      categories = categories.map((category) => {
        const { id, title, createdAt, updatedAt } = category;
        const components = category.components.map(component => component.id);
        const attributes = category.attributes.map(attribute => attribute.attributeId);
        return { id, title, components, attributes };
      });

      return res.json({ categories });
    } catch (e) {
      console.log(e);
      return res.send(e);
    }
  },

  async save(
  {
    body: {
      component: { title, fields }
    }
  },
  res) {
    try {
      res.json({});
    } catch (e) {
      res.json(e, 500);
    }
  }
};
