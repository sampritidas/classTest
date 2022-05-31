const assert = require('assert');
const { rectangle } = require('../src/rectangle.js');

describe('rectangle', () => {
  
  it('Should Equate by checking toString of two instances', () => {
    const rec1 = new rectangle(10, 20);
    const rec2 = new rectangle(10, 20);
    assert.equal(rec1.toString(), rec2.toString());
  });

  it('Should Equate two instance of same class', () => {
    const rec1 = new rectangle(10, 20);
    const rec2 = new rectangle(10, 20);
    assert.ok(rec1.equals(rec2));
  });
});
