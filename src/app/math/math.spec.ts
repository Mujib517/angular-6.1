import { Math } from './math';

describe("Math", () => {

  let math;

  beforeEach(() => {
    //arrange
    console.log("beforeEach");
    math = new Math();
  });

  describe("add()", () => {
    it("should add two numbers", () => {

      //Act
      var actualResult = math.add(10, 20);
      var expectedResult = 30;

      //Assert
      expect(expectedResult).toBe(actualResult);
    });

    //BDD
    it("should return zero when first parameter is zero", () => {
      var result = math.add(0, 100);
      expect(0).toBe(result);
    });

    it("should return -1 when second parameter is zero", () => {
      var res = math.add(100, 0);
      expect(-1).toBe(res);
    });

    it("should return 0 when second parameter is -1", () => {
      var res = math.add(100, -1);

      expect(0).toBe(res);
    });
  });

  describe("sub()", () => {
  
    it("should subtract two numbers", () => {
      var res = math.sub(20, 10);
      expect(10).toBe(res);
    });

    it("should return 0 when a<b", () => {
      var res = math.sub(20, 100);
      expect(0).toBe(res);
    });

    it("should return zero when a=b", () => {
      var res = math.sub(100, 100);
      expect(0).toBe(res);
    });
  });

  afterEach(() => {
    math = null;
    console.log("After Each");
  });

});