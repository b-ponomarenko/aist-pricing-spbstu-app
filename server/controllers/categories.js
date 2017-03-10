const { Category, Component } = require('../models');

module.exports = {
  async get(req, res, next) {
    try {
      const categories = await Category
        .findAll({
          include: [{
            model: Component,
            as: 'components',
            attributes: ['id']
          }]
        });

      res.json({ categories });
    } catch (e) {
      res.json(e);
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