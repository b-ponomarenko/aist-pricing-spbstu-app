import Ember from 'ember';
import Model from 'ember-data/model';
import {attr, belongsTo, hasMany} from "ember-computed-decorators/ember-data";
import computed from "ember-computed-decorators";
import { PRICE } from '../helpers/consts/attributes';

const {
  get,
  inject: { service },
  RSVP: { Promise }
} = Ember;

export default Model.extend({
  @attr('number') quantity,
  @belongsTo('component') component,
  @belongsTo('boiler') boiler,

  @computed()
  price() {
    const values = get(this, 'component.values');
    const price = values.find(value => {
      console.log(get(value, 'attribute'));
      return get(value, 'attribute.id') == PRICE;
    });

    if ( !price ) return ;

    return get(price, 'value') * get(this, 'quantity');
  }
});
