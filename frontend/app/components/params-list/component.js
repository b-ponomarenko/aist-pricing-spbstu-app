import Ember from "ember";

const {
  A,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  classNames: ['row'],

  didReceiveAttrs() {
    set(this, 'component.params', A());
    get(this, 'component.params').pushObject({});
  },
  actions: {
    addParam() {
      get(this, 'component.params').pushObject({});
    },
    removeParam(param) {
      get(this, 'component.params').removeObject(param);
    }
  }
});
