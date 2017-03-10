import Ember from "ember";
import {oneWay, map} from "ember-computed-decorators";

const {
  Controller,
  get,
  set
} = Ember;

export default Controller.extend({
  newComponent: null,

  @oneWay('model.components') components,

  @map('componentModel.fields', function(fields) {
      const title = get(fields, 'title');
      const name = get(fields, 'name');
      return { title, name };
  }) componentFields,

  actions: {
    createComponent() {
      set(this, 'newComponent', {});
    },
    createComponentType(componentModel) {
      debugger;
      set(this, 'newComponentType', { component: get(componentModel, 'id') });
      set(this, 'componentModel', componentModel);
    },
    async saveComponent() {
      const component = get(this, 'newComponent');
      await get(this, 'store').createRecord('component', component).save();
    },
    async saveComponentType() {
      const componentType = get(this, 'newComponentType');
      get(this, 'store').createRecord('component-type', componentType).save();
    }
  }
});
