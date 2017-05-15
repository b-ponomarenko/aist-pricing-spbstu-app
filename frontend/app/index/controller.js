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
  @oneWay('model.metal') metal,

  actions: {
    createBoiler() {
      set(this, 'newBoiler', {});
    },
    async saveBoiler(changeset) {
      const newBoiler = get(this, 'newBoiler');
      try {
        await changeset.validate();
        if ( get(changeset, 'isInvalid') ) {
          return ;
        }
        await changeset.save();
        const boiler = await get(this, 'store').createRecord('boiler', newBoiler).save();
        set(this, 'showAddBoilerModal', false);
        this.transitionToRoute('boiler.wizard.components', boiler.id);
      } catch (e) {
        get(this, 'notification').error(e.message);
        set(this, 'showAddBoilerModal', false);
      }
    }
  }
});
