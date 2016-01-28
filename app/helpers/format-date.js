import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  let date = new Date(params[0]);
  return date.toDateString();
}

export default Ember.Helper.helper(formatDate);
