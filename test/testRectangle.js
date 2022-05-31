const assert = require('assert');
const { Rectangle } = require('../src/rectangle.js');
const { Point } = require('../src/points.js');

describe('rectangle', () => {
  
  it('Should Equate by checking toString of two instances', () => {
    const newPoint = new Point(1, 2);
    const rec1 = new Rectangle(10, 20, newPoint);
    const rec2 = new Rectangle(10, 20, newPoint);
    assert.equal(rec1.toString(), rec2.toString());
  });

  it('Should Equate two instance of same class', () => {
    const newPoint = new Point(1, 2);
    const rec1 = new Rectangle(10, 20, newPoint);
    const rec2 = new Rectangle(10, 20, newPoint);
    assert.ok(rec1.equals(rec2));
  });
});
