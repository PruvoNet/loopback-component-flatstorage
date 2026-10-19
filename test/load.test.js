'use strict';

const test = require('node:test');
const assert = require('node:assert');

test('loads as a LoopBack connector', () => {
  const connector = require('..');
  assert.strictEqual(typeof connector.initialize, 'function');
});
