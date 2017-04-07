const { Category, Component, CategoryAttribute } = require('../models');

module.exports = {
  async getById(req, res) {
    try {
      let category = await Category.findById(req.params.categoryId, {
        include: [{
          model: Component,
          as: 'components'
        }, {
          model: CategoryAttribute,
          as: 'attributes',
          attributes: ['attributeId']
        }]
      });
      category = {
        id: category.id,
        title: category.title,
        components: category.components.map(component => component.id),
        attributes: category.attributes.map(attribute => attribute.attributeId)
      };
      res.json({ category })
    } catch (e) {
      res.json(e);
    }
  },

  async get(req, res, next) {
    try {
      let where = (req.query.title) ? { title: { $like: req.query.title } } : null;
      let categories = await Category
        .findAll({
          include: [{
            model: Component,
            as: 'components'
          }, {
            model: CategoryAttribute,
            as: 'attributes',
            attributes: ['attributeId']
          }],
          where
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

  async deleteById(req, res, next) {
    try {
      await Category.destroy({
        where: {
          id: req.params.categoryId
        }
      });
      res.json({});
    } catch (e) {
      res.json(e);
    }
  },

  async save(
  {
    body: {
      category: { title, attributes }
    }
  },
  res) {
    try {
      const category = await Category.create({ title });
      attributes.forEach(async (attribute) => {
        await CategoryAttribute.create({
          attributeId: attribute,
          categoryId: category.id
        });
      });
      res.json({ category });
    } catch (e) {
      res.json(e, 500);
    }
  }
};
