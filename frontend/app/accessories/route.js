import Ember from "ember";

export default Ember.Route.extend({
  async model() {
    return await Ember.RSVP.hash({
      components: this.store.findAll('component')
    });
  }
});
