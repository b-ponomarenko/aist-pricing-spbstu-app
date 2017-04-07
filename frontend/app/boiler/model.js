import Model from "ember-data/model";
import {attr} from "ember-computed-decorators/ember-data";
import Copyable from "ember-cli-copyable";

export default Model.extend(Copyable, {
  @attr('string') name,
  @attr('number') diameter,
  @attr('number') shellHeight,
  @attr('number') shellThickness,
  @attr('number') bottomHeight,
  @attr('number') weight,
  @attr('number') pipeLength,
});