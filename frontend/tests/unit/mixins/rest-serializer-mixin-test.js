import Ember from "ember";
import RestSerializerMixinMixin from "frontend/mixins/rest-serializer-mixin";
import {module, test} from "qunit";

module('Unit | Mixin | rest serializer mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let RestSerializerMixinObject = Ember.Object.extend(RestSerializerMixinMixin);
  let subject = RestSerializerMixinObject.create();
  assert.ok(subject);
});
