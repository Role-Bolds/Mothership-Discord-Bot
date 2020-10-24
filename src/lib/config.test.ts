import "mocha";
import * as chai from "chai";
import { Config } from "./config";

chai.should();

describe("-- Configuration settings", () => {
  describe("Token", () => {
    it("should be string", () => {
      const config = new Config();
      config.should.have.property("token").be.a("string");
    });
    it("should have proper length", () => {
      const config = new Config();
      config.should.have.property("token").have.lengthOf(59);
    });
  });
  describe("Prefix", () => {
    it("should have a string", () => {
      const config = new Config();
      config.should.have.property("prefix").be.a("string");
    });
  });
  describe("Debug", () => {
    it("should have boolean", () => {
      const config = new Config();
      config.should.have.property("debug").be.a("boolean");
    });
  })
});
