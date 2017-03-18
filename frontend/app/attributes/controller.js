import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  A,
  get,
  inject: { service },
  set
} = Ember;

export default Ember.Controller.extend({
  store: service(),
  notification: service(),

  @oneWay('model') attributes,

  newAttributes: null,

  actions: {
    createAttributeArray() {
      set(this, 'newAttributes', A([{}]));
    },

    async saveAttributes() {
      const attributes = get(this, 'newAttributes');
      attributes.forEach(async (attribute) => {
        let attributeModel = get(this, 'store').createRecord('attribute', attribute);
        try {
          await attributeModel.save();
        } catch (e) {
          attributeModel.destroyRecord();
          get(this, 'notification').error(e);
        }
      });
      set(this, 'newAttributes', null);
    },

    async saveAttribute(attribute) {
      try {
        await attribute.save();
      } catch (e) {
        attribute.rollbackAttributes();
        get(this, 'notification').error(e);
      }
      set(attribute, 'isEditing', false);
    },

    editAttribute(attribute) {
      set(attribute, 'isEditing', true);
    },

    cancelChanges(attribute) {
      attribute.rollbackAttributes();
      set(attribute, 'isEditing', false);
    }
  }
});
