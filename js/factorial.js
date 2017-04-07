/*jshint esversion: 6*/
const factorial = (num) => {
  if (typeof(num) !== 'number' || isNaN(num) || num < 0) {
    throw new Error('No can dat kine');
  } else if (num === 1) {
    return num;
  }
  return num * factorial(--num);
};
module.exports = factorial;