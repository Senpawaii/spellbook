const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slugify');

test('lowercases and joins words with hyphens', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('collapses repeated separators', () => {
  assert.equal(slugify('a  --  b'), 'a-b');
});

test('handles empty string', () => {
  assert.equal(slugify(''), '');
});
