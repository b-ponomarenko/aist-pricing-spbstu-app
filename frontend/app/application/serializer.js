import DS from "ember-data";
import RestSerializerMixin from "../mixins/rest-serializer-mixin";

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, RestSerializerMixin, {

});
