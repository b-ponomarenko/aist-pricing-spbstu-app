import Ember from "ember";
import {oneWay} from "ember-computed-decorators";

const {
  A,
  get,
  set,
  inject: { service }
} = Ember;

export default Ember.Controller.extend({
  store: service(),

  @oneWay('model.boiler') boiler,
  @oneWay('model.branchPipes') branchPipes,
  @oneWay('model.hatches') hatches,
  @oneWay('model.supports') supports,
  @oneWay('model.pipes') pipes,

  selectedBranchPipes: A([{}]),
  selectedHatches: A([{}]),
  selectedSupport: {},
  selectedPipe: {},
  support: null,
  pipe: null,

  actions: {
    selectSupport(support) {
      set(this, 'support', support);
      set(this, 'selectedSupport.component', support);
    },
    selectPipe(pipe) {
      set(this, 'pipe', pipe);
      set(this, 'selectedPipe.component', pipe);
    },
    async nextStep() {
      const store = get(this, 'store');
      const selectedBranchPipes = get(this, 'selectedBranchPipes');
      const selectedSupport = get(this, 'selectedSupport');
      const selectedPipe = get(this, 'selectedPipe');
      const selectedHatches = get(this, 'selectedHatches');
      let configurations = [...selectedBranchPipes, ...selectedHatches, selectedPipe, selectedSupport];

      configurations = configurations.map((configuration) => {
        return store.createRecord('configuration', configuration);
      });

      set(this, 'boiler.configurations', configurations);

      await get(this, 'boiler').saveWithConfigurations();

      this.transitionToRoute('boiler.wizard.salary', get(this, 'boiler.id'));
    }
  }
});
