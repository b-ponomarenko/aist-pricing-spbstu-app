import Ember from "ember";

const {
  A,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  classNames: ['row', 'middle-xs'],

  didReceiveAttrs() {
    set(this, 'component.fields', A());
    get(this, 'component.fields').pushObject({});
  },
  actions: {
    addParam() {
      get(this, 'component.fields').pushObject({});
    },
    removeParam(param) {
      get(this, 'component.fields').removeObject(param);
    }
  }
});
