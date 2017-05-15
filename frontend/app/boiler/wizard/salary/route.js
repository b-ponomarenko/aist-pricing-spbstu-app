import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.findAll('category');
    return this.store.findRecord('boiler', params.boilerId)
  }
});

