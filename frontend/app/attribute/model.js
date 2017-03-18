import Model from "ember-data/model";
import {attr} from "ember-computed-decorators/ember-data";
import computed from "ember-computed-decorators";

export default Model.extend({
  @attr('string') title,
  @computed isEditing: () => false
});
