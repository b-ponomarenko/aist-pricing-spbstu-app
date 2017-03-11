const { Attribute } = require('../models');

module.exports = {
  async getById(req, res, next) {
    try {
      let attribute = await Attribute
        .findById(req.params.attributeId, {
          attributes: ['id', 'title']
        });

      return res.json({ attribute });
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
