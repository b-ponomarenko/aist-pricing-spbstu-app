import Ember from 'ember';
import computed, {oneWay} from "ember-computed-decorators";
import { PIPE, HATCH, BRANCH_PIPE, SUPPORT } from '../../../helpers/consts/categories';
import { PRICE } from '../../../helpers/consts/attributes';

const {
  get,
  set
} = Ember;

function inArray(categories) {
  const hash = {};
  categories.forEach(category => {
    hash[category] = category
  });
  return function (configuration) {
    const categoryId = get(configuration, 'component.category.id');
    return hash[categoryId];
  };
}

export default Ember.Controller.extend({


  @oneWay('model') boiler,

  @computed('boiler.configurations')
  configurations(configurations) {
    return configurations
      .filter(inArray([PIPE, HATCH]));
  },

  @computed('boiler.configurations.length')
  salary(length) {
    const salary = [];

    for (let i = 0; i < length; i++) {
      salary.push(0);
    }

    return salary;
  },


  @computed('boiler.materials', 'boiler.configurations')
  materials(materials, configurations) {
    const branchPipesPrice = configurations.reduce((prev, configuration, i) => {
      if ( +get(configuration, 'component.category.id') === BRANCH_PIPE ) {
        if ( i === 0 ) {
          return get(configuration, 'quantity') * get(configuration, 'component.values').find(value => get(value, 'attribute') === PRICE);
        } else {
          return prev + get(configuration, 'quantity') * get(configuration, 'component.values').find(value => get(value, 'attribute') === PRICE);
        }
      }
    });

    return branchPipesPrice;
  }
});
