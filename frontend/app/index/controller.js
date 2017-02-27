import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  get,
  inject: { service },
  set
} = Ember;

export default Ember.Controller.extend({
  store: service(),

  newTank: null,

  @oneWay('model.tanks') tanks,

  actions: {
    createTank() {
      set(this, 'newTank', {});
    },
    saveTank() {
      const tank = get(this, 'newTank');
      get(this, 'store').createRecord('tank', tank).save();
    }
  }
});
