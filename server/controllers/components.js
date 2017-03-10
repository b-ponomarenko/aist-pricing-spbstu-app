const Component = require('../models/component');
const { translate } = require('../utils/translate');

module.exports = {
  async get(req, res, next) {
    const components = await Component.find();
    res.json({ components }, 200);
  },

  async save(
  {
    body: {
      component: { title, fields }
    }
  },
  res) {
    fields = await Promise.all(fields.map(async ({ title }) => {
      const response = await translate(title);
      const [ name ] = response.text;
      return { title, name };
    }));
    let component = new Component({ title, fields });
    try {
      component = await component.save();
      res.json({component});
    } catch (e) {
      res.json(e, 500);
    }
  }
};