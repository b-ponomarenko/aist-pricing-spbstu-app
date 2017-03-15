import DS from "ember-data";

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    values: { serialize: false, deserialize: 'records' }
  }
});
