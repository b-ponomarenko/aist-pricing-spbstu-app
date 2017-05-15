import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    component: { serialize: false, deserialize: 'records' }
  }
});
