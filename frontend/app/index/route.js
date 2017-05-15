import Ember from "ember";

const {
  get
} = Ember;

export default Ember.Route.extend({
  async model() {
    const metalCategory = await this.store.query('category', { title: 'Металл' });
    return {
      boilers: this.store.findAll('boiler'),
      metal: get(metalCategory, 'firstObject.components')
    }
  }
});
