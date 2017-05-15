import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    configurations: { serialize: false, deserialize: 'records' }
  }
});
