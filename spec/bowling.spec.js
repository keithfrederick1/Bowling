import chai from 'chai';
import { calcScore, stringConverter } from '../src/bowlingGame.js';

const assert = chai.assert;

describe("Scoring Bowling", function() {

  it("All gutter balls  -> 0", function() {
      const rolls = Array(20).fill(0);
      const result = calcScore(rolls);
      const expected = 0;
      assert.equal(result, expected);
  });

  it("All single balls  -> 20", function() {
    const rolls = Array(20).fill(1);
    const result = calcScore(rolls);
    const expected = 20;
    assert.equal(result, expected);
  });

  it("When a player gets a spare, they get a bonus from the next throw", function() {
    const rolls = [
        5, 5, //spare
        2, 3,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0
    ];
    const result = calcScore(rolls);
    const expected = 17;
    assert.equal(result, expected);
  });

  it("Spare in final frame counts bonus throw", function() {
    const rolls = [
        0, 0, 
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        7, 3, 8 //8 point bonus
    ];
    const result = calcScore(rolls);
    const expected = 18;
    assert.equal(result, expected);
  });

  it("When a player gets a strike, they get a bonus for the next 2 throws", function() {
    const rolls = [
        10, //strike
        2, 3,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0
    ];
    const result = calcScore(rolls);
    const expected = 20;
    assert.equal(result, expected);
  });

  it("Strike in final frame counts bonus throw", function() {
    const rolls = [
        0, 0, 
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        10, 10, 1
    ];
    const result = calcScore(rolls);
    const expected = 21;
    assert.equal(result, expected);
  });

  it("should return correct total for string inputs", function(){
    const string = '165/251/X2/71XX1/7';
    const result = calcScore(string);
    const expected = 149;
    assert.equal(result, expected);
  })

  it('Should return 300 for all strikes', function(){
    const string = 'XXXXXXXXXXXX';
    const result = calcScore(string);
    const expected = 300;
    assert.equal(result, expected);
  })

});



describe("String conversion", function() {
  it("Should push 10 for 'X'", function (){
    const string = 'XXXXXXXXXX';
    const result = stringConverter(string);
    const expected = Array(10).fill(10);
    assert.deepEqual(result, expected);
  });

  it("Should push correct spare amount for '/'", function (){
    const string = '0/2/3/';
    const result = stringConverter(string);
    const expected = [0, 10, 2, 8, 3, 7];
    assert.deepEqual(result, expected);
  });

  it("Should convert given string to correct array equivalent", function(){
    const string = '165/251/X2/71XX1/7';
    const result = stringConverter(string);
    const expected = [1, 6, 5, 5, 2, 5, 1, 9, 10, 2, 8, 7, 1, 10, 10, 1, 9, 7];
    assert.deepEqual(result, expected);
  })
})