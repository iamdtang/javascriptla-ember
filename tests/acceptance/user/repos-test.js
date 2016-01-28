import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'javascriptla-ember/tests/helpers/start-app';
import Pretender from 'pretender';

module('Acceptance | user/repos', {
  beforeEach: function() {
    this.application = startApp();
    this.server = new Pretender(function() {
      this.get('https://api.github.com/users/skaterdav85', function() {
        let result = {
          login: 'skaterdav85',
          repos_url: 'https://api.github.com/users/skaterdav85/repos'
        };

        return [ 200, {}, JSON.stringify(result) ];
      });

      this.get('https://api.github.com/users/skaterdav85/repos', function() {
        let result = [
          { id: 1, name: 'angular-data' },
          { id: 2, name: 'angular-data-demo' }
        ];

        return [ 200, {}, JSON.stringify(result) ];
      });
    });
  },

  afterEach: function() {
    this.server.shutdown();
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /users/skaterdav85/repos', function(assert) {
  visit('/users/skaterdav85/repos');

  andThen(function() {
    assert.equal(currentURL(), '/users/skaterdav85/repos');
    assert.equal(find('.repo').length, 2);
  });
});
