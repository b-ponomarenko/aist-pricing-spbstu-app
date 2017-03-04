import DS from "ember-data";
import RestSerializerMixin from "../mixins/rest-serializer-mixin";
import EmberReservedWords from "../helpers/constants/ember-reserved-words";

const OWNER = '__OWNER__';

export default DS.RESTSerializer.extend(RestSerializerMixin, {
  serialize(snapshot, object) {
    const componentType = this._super(...arguments);
    const record = snapshot.record;
    const keys = Object.keys(record).filter(key => !EmberReservedWords.includes(key) && key.indexOf(OWNER) === -1);
    keys.forEach((key) => {
      componentType[key] = record.get(key);
    });
    return componentType;
  }
});
