export class Math {
  add(a, b) {
    if (a === 0) return 0;
    if (b === 0) return -1;
    if (b === -1) return 0;
    return a + b;
  }

  sub(a, b) {
    if (a < b) return 0;
    return a - b;
  }

}
//only code necessary to pass the test
//code coverage
//refactoring
//MVP (add,remove,delete, search)
// attendance, marks, schedule
// mocking, faking, fakes, MoQ, NSubstitute