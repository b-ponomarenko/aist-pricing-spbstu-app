import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      boilers: this.store.findAll('boiler')
    }
  }
});
