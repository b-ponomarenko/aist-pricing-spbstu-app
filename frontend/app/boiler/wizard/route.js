import Ember from "ember";

const {
  RSVP: { hash }
} = Ember;

export default Ember.Route.extend({
  model(params) {
    return hash({
      boiler: this.store.findRecord('boiler', params.boilerId),
      branchPipesCategory: this.store.query('category', { title: 'Штуцеры резьбовые' })
    })
  }
});
