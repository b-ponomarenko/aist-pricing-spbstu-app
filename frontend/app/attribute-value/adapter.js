import Ember from "ember";
import DS from "ember-data";

const {
  get,
  String: { pluralize }
} = Ember;

export default DS.RESTAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    switch (requestType) {
      case "createRecord":
        return `/components/${get(snapshot.record, 'component.id')}/${pluralize(modelName)}`;
      case "findRecord":
        return `/${pluralize(modelName)}/${id}`;
    }

  }
});
