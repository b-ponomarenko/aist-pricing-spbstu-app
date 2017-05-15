const { Boiler, ComponentAttributeValue, Configuration, Component } = require('../models');
const { DIAMETER, PRICE } = require('../utils/attributes');

async function getShellPrice(diameter, shellHeight, shellThickness, metalId) {
  const metal = await ComponentAttributeValue.find({
    where: {
      componentId: metalId
    }
  });

  return Math.round((+diameter)/1000*3.14*(+shellHeight)/1000*shellThickness*8*(+metal.value));
}

async function getBottomPrice(diameter) {
  const componentValue = await ComponentAttributeValue.find({
    where: {
      attributeId: DIAMETER,
      value: diameter.toString()
    }
  });

  const component = await Component.findById(componentValue.componentId, {
    include: [{
      model: ComponentAttributeValue,
      as: 'values'
    }]
  });

  const price = component.values.find((value) => {
    return value.attributeId === PRICE;
  });

  return 2 * price.value;
}

function getRefusePrice(shellPrice) {
  return Math.round(shellPrice * 0.05);
}

module.exports = {
  async get(req, res) {
    try {
      const boilers = await Boiler.findAll({
        include: [{
          model: Configuration,
          as: 'configurations'
        }]
      });
      res.json({ boilers });
    } catch (e) {
      res.json(e);
    }
  },

  async getById(req, res) {
    try {
      const boiler = await Boiler.findById(req.params.boilerId, {
        include: [{
          model: Configuration,
          as: 'configurations',
          include: [{
            model: Component,
            as: 'component',
            include: [{
              model: ComponentAttributeValue,
              as: 'values'
            }]
          }]
        }]
      });

      // boiler.configurations = boiler.configurations.map((configuration) => {
      //
      // });

      res.json({ boiler });
    } catch (e) {
      res.json(e);
    }
  },

  async save(req, res) {
    try {
      const newBoiler = req.body.boiler;

      newBoiler.shellPrice = await getShellPrice(newBoiler.diameter, newBoiler.shellHeight, newBoiler.shellThickness, newBoiler.metal);
      newBoiler.bottomPrice = await getBottomPrice(newBoiler.diameter);
      newBoiler.refusePrice = getRefusePrice(newBoiler.shellPrice);

      const boiler = await Boiler.create(newBoiler);

      res.json({ boiler });
    } catch (e) {
      res.json(e, 400);
    }
  }
};