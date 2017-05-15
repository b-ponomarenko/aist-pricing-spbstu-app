import Ember from "ember";
import Model from "ember-data/model";
import {attr, hasMany, belongsTo} from "ember-computed-decorators/ember-data";
import Copyable from "ember-cli-copyable";

const {
  get,
  set
} = Ember;

export default Model.extend(Copyable, {
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
  },

  rollbackAllAttributes() {
    const values = this.get('values');
    this.rollbackAttributes();

    values.forEach((value) => {
      value.rollbackAttributes();
    });
  }
});
