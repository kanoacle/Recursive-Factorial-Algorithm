/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;
const factorial = require('../js/factorial.js');

describe('factorial()', () => {
  it('should only take in a number', () => {
    expect(factorial.bind(factorial, '18')).to.throw(Error);
    expect(factorial.bind(factorial, ['hi'])).to.throw(Error);
    expect(factorial.bind(factorial, {hey: 12})).to.throw(Error);
    expect(factorial.bind(factorial, null)).to.throw(Error);
    expect(factorial.bind(factorial, undefined)).to.throw(Error);
    expect(factorial.bind(factorial, NaN)).to.throw(Error);
  });
  it('should return the factorial of a given input number', () => {
    expect(factorial(3)).to.equal(6);
    expect(factorial(5)).to.equal(120);
    expect(factorial(8)).to.equal(40320);
  });
});