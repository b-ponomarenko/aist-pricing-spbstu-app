import Ember from "ember";
import {oneWay} from "ember-computed-decorators";
import BoilerValidations from "../validations/boiler";

const {
  get,
  inject: { service },
  set
} = Ember;

export default Ember.Controller.extend({
  BoilerValidations,

  store: service(),
  notification: service(),

  newBoiler: null,

  @oneWay('model.boilers') boilers,

  actions: {
    createBoiler() {
      set(this, 'newBoiler', {});
    },
    async saveBoiler(changeset) {
      const boiler = get(this, 'newBoiler');
      try {
        await changeset.validate();
        if ( get(changeset, 'isInvalid') ) {
          return ;
        }
        await changeset.save();
        set(this, 'showAddBoilerModal', false);
        await get(this, 'store').createRecord('boiler', boiler).save();
      } catch (e) {
        get(this, 'notification').error(e.message);
      }
    }
  }
});
