import Ember from 'ember';

export function arrayIndex([array, index]) {
  return array[index];
}

export default Ember.Helper.helper(arrayIndex);
