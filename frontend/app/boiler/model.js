import Ember from 'ember';
import Model from "ember-data/model";
import computed, { notEmpty } from "ember-computed-decorators";
import {attr, belongsTo, hasMany} from "ember-computed-decorators/ember-data";

const {
  get,
  set
} = Ember;

export default Model.extend({
  @attr('string') name,
  @attr('string') diameter,
  @attr('number') shellHeight, // высота обечайки
  @attr('number') shellThickness, // толщина стенки обечайки
  @attr('number') bottomHeight, // высота днища
  @attr('number') weight,
  @attr('number') pipeLength, // длина змеевика

  @attr('number') shellPrice, // стоимость обечайки
  @attr('number') bottomPrice, // стоимость днища
  @attr('number') refusePrice, // стоимость отходов

  @belongsTo('component') metal,

  @hasMany('configuration') configurations,

  @notEmpty('configurations') isVisible,

  @computed('shellPrice', 'bottomPrice', 'refusePrice')
  materials(shellPrice, bottomPrice, refusePrice) { // Материалы на корпус бака
    return shellPrice + bottomPrice + refusePrice;
  },

  async saveWithConfigurations() {
    const configurations = get(this, 'configurations');

    configurations.forEach(async (configuration) => {
      set(configuration, 'boiler', this);
      await configuration.save();
    })
  },
});