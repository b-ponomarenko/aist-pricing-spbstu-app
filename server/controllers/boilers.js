const { Boiler } = require('../models');

module.exports = {
  async get(req, res) {
    try {
      const boilers = await Boiler.findAll();
      res.json({ boilers });
    } catch (e) {
      res.json(e);
    }
  },

  async getById(req, res) {
    try {
      const boiler = await Boiler.findById(req.params.boilerId);
      res.json({ boiler });
    } catch (e) {
      res.json(e);
    }
  },

  async save(req, res) {
    try {
      const boiler = await Boiler.create(req.body.boiler);
      res.json({ boiler });
    } catch (e) {
      res.json(e, 400);
    }
  }
};