const { Configuration } = require('../models');

module.exports = {
  async save(req, res) {
    try {
      const data = req.body.configuration;
      const configuration = await Configuration.create(data);

      res.json({configuration});
    } catch (e) {
      if ( e.name === "SequelizeValidationError" ) {
        res.status(400).json(e);
      } else {
        res.status(500).json(e);
      }
    }
  }
};