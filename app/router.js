import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('user', { path: ':username' });
  this.route('user', { path: 'users/:username' }, function() {
    this.route('repos', function() {
      this.route('comments');
    });
    this.route('settings', function() {
      this.route('profile');
    });
  });
});

export default Router;
