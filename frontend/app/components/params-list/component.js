import Ember from "ember";

const {
  get
} = Ember;

export default Ember.Component.extend({
  actions: {
    addParam() {
      const array = get(this, 'array');
      array.pushObject({});
    },
    removeParam(param) {
      const array = get(this, 'array');
      if ( array.length === 1 ) {
        return ;
      }
      array.removeObject(param);
    }
  }
});
