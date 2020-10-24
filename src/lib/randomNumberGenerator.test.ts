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


describe("-- Random number generator", () => {
  describe(`main function:{maxNumber: ${maxNumber}, testRandom: ${testRandom}}`, () => {
    describe("Expect it to:", () => {
      it("exist as function", () => {
        expect(randomNumberGenerator).to.be.a("function");
      }).slow(2);
      describe('Produce expected results from input:', () => {
        it(`(${maxNumber}) produced number`, () => {
          expect(randomNumberGenerator(maxNumber)).to.be.a('number');
        });
        it(`(${maxNumber},true) produced number`, () => {
          expect(randomNumberGenerator(maxNumber,true)).to.be.a('number');
        });
  });
  describe('Produce valid results after a series of tests', () => {
        it(`run ${testRandom} times with input (${maxNumber}) and return number within range [0,${
          maxNumber - 1
        }]`, () => {
          for (let index = 0; index < testRandom; index++) {
            const number = randomNumberGenerator(maxNumber);
            expect(number).to.be.at.most(
              maxNumber - 1,
              ` @test[${index}] function gave: ${number}`
            ).and.to.be.at.least(0,
              ` @test[${index}] function gave`);;
          };
        }).slow(15);
        it(`run ${testRandom} times with input (${maxNumber}, true) and return number within range [1,${maxNumber}]`, () => {
      for (let index = 0; index < testRandom; index++) {
        const number = randomNumberGenerator(maxNumber,true);
        expect(number).to.be.at.most(
          maxNumber,
          ` @test[${index}] function gave`
        ).and.to.be.at.least(1,
          ` @test[${index}] function gave`);;
      };
    }).slow(15);
      });
    });
  });
  describe(`batch function:{maxBatch: ${maxBatch}, maxNumber: ${maxNumber}, testRandom: ${testRandom}}`, () => {
        describe("Expect it to:", () => {
          it("exists as function", () => {
            expect(batchRandomNumberGenerator).to.be.a("function");
          }).slow(30);
        describe('Produce valid results after a series of tests', () => {
          it(`run ${testRandom} times and always produce a list ${maxBatch} in length`, () => {
            for (let index = 0; index < testRandom; index++) {
              const elementLength = batchRandomNumberGenerator(maxBatch, maxNumber)
                .length;
              expect(elementLength).to.equal(
                maxBatch,
                ` @test[${index}] function gave: ${elementLength}`
              );
            };
          }).slow(15);
          it(`run ${testRandom} times with input (${maxBatch}, ${maxNumber}) return number within range [0,${
            maxNumber - 1
          }]`, () => {
            for (let index = 0; index < testRandom; index++) {
              const number = batchRandomNumberGenerator(maxBatch, maxNumber);
              number.forEach(element => {
                expect(element).to.be.at.most(
                  maxNumber - 1,
                  ` @test[${index}] function gave`
                ).and.to.be.at.least(0,
                  ` @test[${index}] function gave`);
              });
            };
          }).slow(30);
          it(`run ${testRandom} times with input (${maxBatch}, ${maxNumber}, true) return number within range [0,${maxNumber}]`, () => {
            for (let index = 0; index < testRandom; index++) {
              const number = batchRandomNumberGenerator(maxBatch, maxNumber, true);
              number.forEach(element => {
                expect(element).to.be.at.most(
                  maxNumber,
                  ` @test[${index}] function gave`
                ).and.to.be.at.least(1,
                  ` @test[${index}] function gave`);
              });
            };
          }).slow(30);
        });
    });
  });

}).timeout(500);