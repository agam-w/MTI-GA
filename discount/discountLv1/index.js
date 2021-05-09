const { discounts, types } = require('./data')

function getDiscount(total, type) {
  // CODE HERE
}

function test(fun, result) {
    console.log(fun === result)
}

test(getDiscount(30000, types[0]), 6000);
test(getDiscount(40000, types[2]), 12000);
test(getDiscount(20000, types[1]), 0);
test(getDiscount(38000, types[2]), 0);
test(getDiscount(48000, types[2]), 14400);