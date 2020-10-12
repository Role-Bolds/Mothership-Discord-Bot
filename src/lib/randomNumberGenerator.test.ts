import "mocha";
import * as chai from "chai";
import {
  randomNumberGenerator,
  batchRandomNumberGenerator,
} from "./randomNumberGenerator";
const expect = chai.expect;
const maxNumber = 4;
const maxBatch = 6;
const testRandom = 100;

describe("Random number generator", () => {
  describe(`main function:{maxNumber: ${maxNumber}, testRandom: ${testRandom}}`, () => {
    it("exist as function", () => {
      expect(randomNumberGenerator).to.be.a("function");
    }).slow(2);
    describe("Expect it to:", () => {
      it(`run ${testRandom} times with input ${maxNumber} return number within range [0,${
        maxNumber - 1
      }]`, () => {
        for (let index = 0; index < testRandom; index++) {
          const number = randomNumberGenerator(maxNumber);
          expect(number).to.be.at.most(
            maxNumber - 1,
            ` @test[${index}] function gave: ${number}`
          );
        }
      }).slow(30);
    });
  });
  describe(`batch function:{maxNumber: ${maxNumber}, maxBatch: ${maxBatch}, testRandom: ${testRandom}}`, () => {
    it("exists as function", () => {
      expect(batchRandomNumberGenerator).to.be.a("function");
    }).slow(2);
    describe("Expect it to:", () => {
      it(`run ${testRandom} times with input ${maxNumber} return number within range [0,${
        maxNumber - 1
      }]`, () => {
        for (let index = 0; index < testRandom; index++) {
          const number = batchRandomNumberGenerator(maxBatch, maxNumber);
          number.forEach(element => {
            expect(element).to.be.at.most(
              maxNumber - 1,
              ` @test[${index}] function gave: ${element}`
            )
          });
        }
      }).slow(30);
      it(`run ${testRandom} times and always produce a list ${maxBatch} in length`, () => {
        for (let index = 0; index < testRandom; index++) {
          const elementLength = batchRandomNumberGenerator(maxBatch, maxNumber)
            .length;
          expect(elementLength).to.equal(
            maxBatch,
            ` @test[${index}] function gave: ${elementLength}`
          );
        }
      }).slow(30);
    });
  });
});