const discounts = {
	food: [
    {
      minimumBuy: 20000,
      type: 'percentage',
      value: 20
    },
    {
      minimumBuy: 30000,
      type: 'actual',
      value: 5000
    },
  ],
  electronic: [
    {
      minimumBuy: 30000,
      type: 'percentage',
      value: 25
    },
    {
      minimumBuy: 40000,
      type: 'actual',
      value: 10000
    },
  ],
  wardrobe: [
    {
      minimumBuy: 15000,
      type: 'percentage',
      value: 10
    },
    {
      minimumBuy: 30000,
      type: 'actual',
      value: 4000
    },
  ]
}

const types = ['food', 'electronic', 'wardrobe']

module.exports = { discounts, types }