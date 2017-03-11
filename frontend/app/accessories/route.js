import Ember from "ember";

export default Ember.Route.extend({
  async model() {
    return await Ember.RSVP.hash({
      categories: this.store.findAll('category')
    });
  }
});
