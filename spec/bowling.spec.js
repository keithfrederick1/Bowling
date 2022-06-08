import chai from 'chai';
import { calcScore } from '../src/bowlingGame.js';

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
        0, 0, //strike
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

});