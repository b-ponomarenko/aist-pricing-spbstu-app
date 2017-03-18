import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  A,
  Controller,
  get,
  inject: { service },
  set
} = Ember;

export default Controller.extend({
  store: service(),
  notification: service(),

  newCategory: null,

  @oneWay('model.categories') categories,
  @oneWay('model.attributes') attributes,

  actions: {
    createCategory() {
      set(this, 'newCategory', {
        attributes: A([{}])
      });
    },

    async saveCategory() {
      const category = get(this, 'newCategory');
      try {
        get(this, 'store').createRecord('category', category).save();
      } catch (e) {
        get(this, 'notification').error(e);
      }
    },

    async deleteCategory(category) {
      try {
        await category.destroyRecord();
      } catch (e) {
        debugger;
        get(this, 'notification').error(e);
      }
    },

    chooseAttribute(categoryAttribute, attribute) {
      const categoryAttributes = get(this, 'newCategory.attributes');
      const categoryAttributeIndex = categoryAttributes.indexOf(categoryAttribute);
      categoryAttributes.replace(categoryAttributeIndex, 1, attribute);
    }
  }
});
