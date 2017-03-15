import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  Controller,
  get,
  inject: { service },
  set
} = Ember;

export default Controller.extend({
  store: service(),

  newCategory: null,

  @oneWay('model.categories') categories,

  actions: {
    createCategory() {
      set(this, 'newCategory', {});
    },
    createComponent(category) {
      const attributes = get(category, 'attributes');
      const values = attributes.map((attribute) => {
        return get(this, 'store').createRecord('attribute-value', {
          attribute
        })
      });
      set(this, 'newComponent', {
        values,
        category
      });
    },
    async saveCategory() {
      const category = get(this, 'newCategory');
      await get(this, 'store').createRecord('category', category).save();
    },
    async saveComponent() {
      const component = get(this, 'newComponent');
      get(this, 'store').createRecord('component', component).saveWithValues();
    }
  }
});
