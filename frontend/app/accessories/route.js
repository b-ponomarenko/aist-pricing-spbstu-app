import Ember from "ember";

export default Ember.Route.extend({
  async model() {
    return await this.store.findAll('component');
  }
});
