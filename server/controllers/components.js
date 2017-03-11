const { Component } = require('../models');

module.exports = {
  async getById(req, res, next) {
    try {
      let component = await Component
        .findById(req.params.componentId, {
          attributes: ['id', 'title']
        });

      return res.json({ component });
    } catch (e) {
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
