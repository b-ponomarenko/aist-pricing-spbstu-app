import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  A
} = Ember;

export default Ember.Controller.extend({
  @oneWay('model.boiler') boiler,
  @oneWay('model.branchPipesCategory.firstObject.components') branchPipes,

  selectedBranchPipes: A([{}])
});
