const sum = (num1, num2) => {
    return num1 + num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}
const square = (num) => {
    return Math.pow(num, 2)
}
module.exports = {
    sum,
    multiply,
    divide,
    square
}
const stringMod = require("./string-module")

