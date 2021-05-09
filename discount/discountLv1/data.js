const discounts = {
	food: {
  	minimumBuy: 20000,
    discount: 20
  },
  electronic: {
  	minimumBuy: 30000,
    discount: 25
  },
  wardrobe: {
  	minimumBuy: 40000,
    discount: 30
  }
}

const types = ['food', 'electronic', 'wardrobe']

module.exports = { discounts, types }