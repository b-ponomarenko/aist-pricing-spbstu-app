const { Attribute } = require('../models');

module.exports = {
  async get(req, res) {
    try {
      const attributes = await Attribute.findAll({
        attributes: ['id', 'title']
      });
      res.json({ attributes });
    } catch (e) {
      res.json(e);
    }
  },

  async getById(req, res) {
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
        attribute: { title }
      }
    },
    res) {
    try {
      const attribute = await Attribute.create({ title });
      res.json({ attribute });
    } catch (e) {
      res.json(e, 500);
    }
  },

  async deleteById(req, res) {
    try {
      console.log(req.params.attributeId);
      await Attribute.destroy({
        where: {
          id: req.params.attributeId
        }
      });

      res.json({});
    } catch (e) {
      res.json(e, 500);
    }
  },

  async update(req, res) {
    try {
      let attribute = await Attribute.findById(req.params.attributeId);
      attribute.set('title', req.body.attribute.title);
      await attribute.save();
      res.json({ attribute });
    } catch (e) {
      res.json(e);
    }
  },
};
