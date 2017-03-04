import Ember from "ember";

export default Ember.Mixin.create({
  primaryKey: '_id',
  serializeId(id) {
    return id.toString();
  }
});
