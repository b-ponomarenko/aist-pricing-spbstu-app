import {moduleForModel, test} from "ember-qunit";

moduleForModel('component-attribute-value', 'Unit | Model | component attribute value', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
