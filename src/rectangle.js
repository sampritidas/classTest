class rectangle {
  constructor(height, width, x, y) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  toString() {
    return `Rectangle height is ${this.height} and width is ${this.width}`;
  }
  
  equals(OtherRectangle) {
    return OtherRectangle instanceof rectangle &&
      this.height === OtherRectangle.height &&
      this.width === OtherRectangle.width;
  }
}

exports.rectangle = rectangle;
const newRect = new rectangle(3, 2, { x: 0, y: 0 });
console.log(newRect.area());
console.log(newRect.toString());
