import Ember from "ember";

const {
  Controller,
  get,
  set
} = Ember;

export default Controller.extend({
  newComponent: null,

  actions: {
    createComponent() {
      set(this, 'newComponent', {});
    },
    async saveComponent() {
      const component = get(this, 'newComponent');
      await get(this, 'store').createRecord('component', component).save();
    }
  }
});
