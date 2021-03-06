import Model from "ember-data/model";
import {attr, belongsTo} from "ember-computed-decorators/ember-data";

export default Model.extend({
  @attr('string') value,
  @belongsTo('attribute', { async: true }) attribute
});