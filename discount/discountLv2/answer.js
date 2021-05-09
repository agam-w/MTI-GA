const { discounts, types } = require('./data')

function getDiscount(total, type) {
  let discount = 0;
  let discountApplied = discounts[type].filter(disc => total>=disc.minimumBuy)
  discountApplied.map(data=>{
    data.type == 'percentage' ?
    discount += total*data.value/100 :
    discount += data.value; 
  })
  return discount;
}

function test(fun, result) {
    console.log(fun === result)
}

test(getDiscount(30000, types[0]), 11000);
test(getDiscount(40000, types[2]), 8000);
test(getDiscount(20000, types[1]), 0);
test(getDiscount(38000, types[2]), 7800);
test(getDiscount(48000, types[0]), 14600);