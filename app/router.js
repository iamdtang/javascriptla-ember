import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', { path: ':username' }, function() {
    this.route('repos');
  });
  this.route('loading');
});

export default Router;
