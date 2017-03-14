import Model from "ember-data/model";
import {attr, hasMany, belongsTo} from "ember-computed-decorators/ember-data";

export default Model.extend({
  @belongsTo('category') category,
  @attr('string') title,
  @hasMany('component-attribute-value') values
});
