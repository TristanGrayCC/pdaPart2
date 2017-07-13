var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator = new Calculator;
    calculator.add(5);
    assert.equal(calculator.runningTotal, 5)
  })

  it('it can subtract', function(){
    calculator = new Calculator;
    calculator.subtract(5);
    assert.equal(calculator.runningTotal, -5)
  })

  it('it can multiply', function(){
    calculator = new Calculator;
    calculator.previousTotal = 4
    calculator.multiply(6);
    assert.equal(calculator.runningTotal, 24)
  })

  it('it can divide', function(){
    calculator = new Calculator;
    calculator.previousTotal = 7
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 1)
  })

  it('it can numberclick', function(){
    calculator = new Calculator;
    calculator.numberClick(9);
    assert.equal(calculator.runningTotal, 9)
  })

  it('it can operatorclick', function(){
    calculator = new Calculator;
    calculator.previousTotal = 5;
    calculator.runningTotal = 4;
    calculator.operatorClick('=');
    assert.equal(calculator.newTotal, true)
  })

  it('it can clearclick', function(){
    calculator = new Calculator;
    calculator.runningTotal = 12;
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  })

});
