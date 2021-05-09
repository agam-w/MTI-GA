const { discounts, types } = require('./data')

function getDiscount(total, type) {
  // CODE HERE
}

function test(fun, result) {
    console.log(fun === result)
}

test(getDiscount(30000, types[0]), 11000);
test(getDiscount(40000, types[2]), 8000);
test(getDiscount(20000, types[1]), 0);
test(getDiscount(38000, types[2]), 7800);
test(getDiscount(48000, types[0]), 14600);