"use strict";

function getAreaofCircle(r) {
  return Math.PI * r ** 2;
}
console.log(getAreaofCircle(5));

function getCircumferenceofCircle(r) {
  return Math.PI * (2 * r);
}
console.log(getCircumferenceofCircle(5));

function getAreaOfSquare(s) {
  return s * s;
}
console.log(getAreaOfSquare(2));

function getAreaofTriangle(b, h) {
  return (b * h) / 2;
}
console.log(getAreaofTriangle(3, 4));
