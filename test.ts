class Bread {
  constructor(type: number) { }
}

class Veggies {
  constructor(type: number) { }
}

class Sausages {
  constructor(type: number) { }
}

class Wrap {
  constructor(v: Veggies, b: Bread, s: Sausages) {
    // var b = new Bread();
    // var v = new Veggies();
    // var s = new Sausages();
  }
}

//Breaking SRP
// DI Framework