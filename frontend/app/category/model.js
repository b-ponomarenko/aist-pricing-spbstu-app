import Model from "ember-data/model";
import {attr, hasMany} from "ember-computed-decorators/ember-data";

export default Model.extend({
  @attr('string') title,
  @hasMany('component', { async: true }) components,
  @hasMany('attribute', { async: true }) attributes
});
