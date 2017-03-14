import Ember from "ember";

const {
  A,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  classNames: ['row', 'middle-xs'],

  didReceiveAttrs() {
    set(this, 'category.fields', A());
    get(this, 'category.fields').pushObject({});
  },
  actions: {
    addParam() {
      get(this, 'category.fields').pushObject({});
    },
    removeParam(param) {
      get(this, 'category.fields').removeObject(param);
    }
  }
});
