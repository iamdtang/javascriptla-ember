import { formatDate } from '../../../helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format date');

// Replace this with your real tests.
test('it formats the date', function(assert) {
  var result = formatDate(['2011-03-24T02:56:27Z']);
  assert.equal(result, 'Wed Mar 23 2011');
});
