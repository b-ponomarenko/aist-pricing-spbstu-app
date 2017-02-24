import Ember from "ember";

const {
  Controller,
  get,
  set
} = Ember;

export default Controller.extend({
  componentName: null,

  actions: {
    saveComponent() {
      console.log(get(this, 'componentName'));
      set(this, 'componentName', null);
    }
  }
});
