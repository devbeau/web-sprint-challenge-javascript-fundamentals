// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

// CuboidMaker.prototype.volume = function (){
//     return this.length * this.width * this.height};

// CuboidMaker.prototype.surfaceArea = function (){
//     return (2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));}

// const cuboid = new CuboidMaker(4, 5, 5);

class CuboidMakerClass{
    constructor(properties){
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }
    volume() {return this.length * this.width * this.height;};
    surfaceArea() {return(2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));};
}

const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("These are the tests for classes.js:", cuboidClass.volume()); // 100
console.log("These are the tests for classes.js:", cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(properties){
        super(properties);
    }
    cubeVolume() {return Math.pow(this.length, 3)};
    cubeSurface() {return 6*Math.pow(this.length, 2)};
}

const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
});

console.log("These are the tests for classes.js stretch:", cube.cubeVolume());
console.log("These are the tests for classes.js stretch:", cube.cubeSurface());