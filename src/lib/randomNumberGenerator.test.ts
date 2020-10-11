import "mocha";
import * as chai from "chai";
import {
  randomNumberGenerator,
  batchRandomNumberGenerator,
} from "./randomNumberGenerator";
const expect = chai.expect;
const should = chai.should();
describe("Random number generator", () => {
  describe("main function", () => {
    describe("Expect it to:", () => {
      const maxNumber = 4;
      const testRandom = 100;
      it("exist as function", () => {
        expect(randomNumberGenerator).to.be.a("function");
      });
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
  describe("batch function", () => {
    describe("Expect it to:", () => {
      const maxNumber = 4;
      const maxBatch = 6;
      const testRandom = 100;
      it("exists as function", () => {
        expect(batchRandomNumberGenerator).to.be.a("function");
      });
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
    });
  });
});