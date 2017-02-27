import Ember from "ember";

export default Ember.Route.extend({
  async model() {
    await this.store.findAll('component');
  }
});
