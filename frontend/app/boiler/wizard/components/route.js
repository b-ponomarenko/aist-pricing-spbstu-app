import Ember from "ember";

const {
  get,
  RSVP: { hash }
} = Ember;

export default Ember.Route.extend({
  async model(params) {
    const branchPipeCategory = await this.store.query('category', { title: 'Штуцеры резьбовые' });
    const hatchCategory = await this.store.query('category', { title: 'Люки' });
    const supportCategory = await this.store.query('category', { title: 'Опоры' });
    const pipeCategory = await this.store.query('category', { title: 'Змеевики' });

    return hash({
      boiler: this.store.findRecord('boiler', params.boilerId),
      branchPipes: get(branchPipeCategory, 'firstObject.components'),
      hatches: get(hatchCategory, 'firstObject.components'),
      supports: get(supportCategory, 'firstObject.components'),
      pipes: get(pipeCategory, 'firstObject.components'),
    })
  }
});
