/*jshint esversion: 6*/
const factorial = (num) => {
  if (typeof(num) !== 'number' || isNaN(num)) {
    return false;
  } else if (num === 1) {
    return num;
  }
  return num * factorial(--num);
};
module.exports = factorial;