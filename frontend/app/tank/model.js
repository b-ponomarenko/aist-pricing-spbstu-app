import Model from "ember-data/model";
import {attr} from "ember-computed-decorators/ember-data";

export default Model.extend({
  @attr('string') name,
  @attr('number') diameter,
  @attr('number') shellHeight,
  @attr('number') shellThickness,
  @attr('number') bottomHeight
});
