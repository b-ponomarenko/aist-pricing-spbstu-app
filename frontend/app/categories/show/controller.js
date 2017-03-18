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
      set(this, 'selectedComponent', {
        values,
        category
      });
    },

    chooseComponent(component) {
      set(this, 'selectedComponent', component);
    },

    async saveComponent() {
      const component = get(this, 'selectedComponent');
      try {
        if ( component instanceof get(this, 'store').modelFor('component') ) {
          await component.saveWithValues();
        } else {
          await get(this, 'store').createRecord('component', component).saveWithValues();
        }
      } catch (e) {
        get(this, 'notification').error(e);
      }
      set(this, 'selectedComponent', null);
    },

    async deleteComponent(component) {
      try {
        await component.destroyRecord();
      } catch (e) {
        get(this, 'notification').error(e);
      }
    }
  }
});
