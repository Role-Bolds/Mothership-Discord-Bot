import * as chai from 'chai';
import 'mocha';
import { debug } from './debug';
const expect = chai.expect;
describe('-- Debug output', () => {
  describe('Debug message function', () => {
    it('exists as function', () => {
      expect(debug).to.be.a('function');
    });
    it('produces console.log message', () => {
      // tslint:disable-next-line: no-console

    });
  });
});