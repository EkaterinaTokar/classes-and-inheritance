function BaseClass(val = "") {
  this.val = val;
}
//ES6 class IntBuilder:
class IntBuilder extends BaseClass {
  constructor(val = 0) {
    super(val);
  }
  static random(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  plus(...n) {
    this.val = this.val + n.reduce((sum, elem) => sum + elem, 0);
    return this;
  }
  minus(...n) {
    this.val = this.val - n.reduce((sum, elem) => sum + elem, 0);
    return this;
  }
  multiply(n) {
    this.val = this.val * n;
    return this;
  }
  divide(n) {
    this.val = this.val / n;
    return this;
  }
  mod(n) {
    this.val = this.val % n;
    return this;
  }
  get() {
    return this.val;
  }
}

let intBuilder = new IntBuilder(10);
console.log(
  intBuilder
    .plus(2, 3, 2) // 17;
    .minus(1, 2) // 14;
    .multiply(2) // 28;
    .divide(4) // 7;
    .mod(3) // 1;
    .get() // -> 1;
);
console.log(IntBuilder.random(10, 100)); //42

//ES5 class StringBuilder:
function StringBuilder(val) {
  BaseClass.call(this, val);
}

StringBuilder.prototype = Object.create(BaseClass.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.plus = function (...string) {
  this.val = this.val + string.join("");
  return this;
};
StringBuilder.prototype.minus = function (n) {
  this.val = this.val.slice(0, -n);
  return this;
};
StringBuilder.prototype.multiply = function (int) {
  this.val = this.val.repeat(int);
  return this;
};
StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.val.length / n);
  this.val = this.val.slice(0, k);
  return this;
};
StringBuilder.prototype.remove = function (str) {
  this.val = this.val.split("").filter(function (letter) {
    return letter !== str;
  });
  this.val = this.val.join("");
  return this;
};
StringBuilder.prototype.sub = function (from, n) {
  this.val = this.val.substr(from, n);
  return this;
};
StringBuilder.prototype.get = function () {
  return this.val;
};

let strBuilder = new StringBuilder("Hello"); // 'Hello';
console.log(
  strBuilder
    .plus(" all", "!") // 'Hello all!'
    .minus(4) // 'Hello '
    .multiply(3) // 'Hello Hello Hello '
    .divide(4) // 'Hell';
    .remove("l") // 'He';
    .sub(1, 1) // 'e';
    .get() // -> 'e';
);
