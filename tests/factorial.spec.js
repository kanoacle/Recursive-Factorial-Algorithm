/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;
const factorial = require('../js/factorial.js');

describe('factorial()', () => {
  it('should only take in a number', () => {
    expect(factorial('18')).to.equal(false);
    expect(factorial(['hi'])).to.equal(false);
    expect(factorial({hey: 12})).to.equal(false);
    expect(factorial(null)).to.equal(false);
    expect(factorial(undefined)).to.equal(false);
    expect(factorial(NaN)).to.equal(false);
  });
  it('should return the factorial of a given input number', () => {
    expect(factorial(3)).to.equal(6);
    expect(factorial(5)).to.equal(120);
    expect(factorial(8)).to.equal(40320);
  });
});