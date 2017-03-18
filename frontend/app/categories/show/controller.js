import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  get,
  set
} = Ember;

export default Ember.Controller.extend({
  @oneWay('model') category,

  actions: {
    createComponent() {
      const category = get(this, 'category');
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

    async saveComponent() {
      const component = get(this, 'newComponent');
      try {
        await get(this, 'store').createRecord('component', component).saveWithValues();
      } catch (e) {
        get(this, 'notification').error(e);
      }
    }
  }
});
