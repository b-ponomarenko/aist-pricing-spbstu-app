import Model from "ember-data/model";
import {attr, hasMany} from "ember-computed-decorators/ember-data";

export default Model.extend({
  @attr('string') title,
  @hasMany components
});
