import Ember from "ember";
import Model from "ember-data/model";
import {attr, hasMany, belongsTo} from "ember-computed-decorators/ember-data";

const {
  get,
  set
} = Ember;

export default Model.extend({
  @belongsTo('category') category,
  @attr('string') title,
  @hasMany('attribute-value') values,

  async saveWithValues() {
    const component = await this.save();
    const values = this.get('values');

    values.forEach(async (value) => {
      set(value, 'component', component);
      await value.save();
    });
  }
});
