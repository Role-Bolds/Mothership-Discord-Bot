import * as chai from 'chai';
import { assert } from 'chai';
import 'mocha';
import { Config } from './config';
import { debug } from './debug';
const config = new Config();
const expect = chai.expect;
const should = chai.should();
describe('Debug function', () => {
  it('uses config.debug setting', () => {
    expect(config.debug).to.be.a('boolean')
  });
  describe('Debug message function', () => {
    it('exists as function', () => {
      expect(debug).to.be.a('function');
    });
    it('produces console.log message', () => {
      // tslint:disable-next-line: no-console

    });
  });
});