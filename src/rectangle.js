const { Point } = require('./points.js');

class Rectangle {
  constructor(height, width, points) {
    this.height = height;
    this.width = width;
    this.points = points;
  }

  area() {
    return this.height * this.width;
  }

  getPoints() {
    return this.points.printXandY();
  }

  toString() {
    return `Rectangle height is ${this.height} and width is ${this.width}`;
  }

  pointProperty() {
    return this.points.x;
  }
  
  equals(OtherRectangle) {
    return OtherRectangle instanceof Rectangle &&
      this.height === OtherRectangle.height &&
      this.width === OtherRectangle.width &&
      this.points.equals(OtherRectangle.points);
  }
}

exports.Rectangle = Rectangle;
