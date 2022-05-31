const assert = require('assert');
const { Point } = require('../src/points.js');

describe('point', () => {
  
  it('Should Equate by checking toString of two instances', () => {
    const newPoint = new Point(1, 2);
    const point1 = new Point(10, 20, newPoint);
    const point2 = new Point(10, 20, newPoint);
    assert.equal(point1.toString(), point2.toString());
  });

  it('Should Equate two instance of same class', () => {
    const point1 = new Point(10, 20);
    const point2 = new Point(10, 20);
    assert.ok(point1.equals(point2));
  });
});
