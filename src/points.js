class Point {
  constructor( x, y ) {
    this.x = x;
    this.y = y;
  }

  printXandY() {
    return `x is ${this.x} and y is ${this.y}`;
  }

  equals(otherPoint) {
    return otherPoint instanceof Point &&
      this.x === otherPoint.x &&
      this.y === otherPoint.y;
  }
}

// const pointInstance = new Point(10, 20);
// console.log(pointInstance.printXandY());
exports.Point = Point;
