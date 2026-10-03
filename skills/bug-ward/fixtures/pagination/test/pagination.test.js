const test = require('node:test');
const assert = require('node:assert/strict');
const { lastPage } = require('../src/pagination');

test('rounds up a partial last page', () => {
  assert.equal(lastPage(25, 10), 3);
});

test('returns 1 for a single item', () => {
  assert.equal(lastPage(1, 10), 1);
});

test('returns 1 for zero items', () => {
  assert.equal(lastPage(0, 10), 1);
});
