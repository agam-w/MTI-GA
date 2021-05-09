# HOW MUCH DISCOUNT YOU WILL GET ??

in this exercise, you should find out how much discount you will get when purchasing some items.

Make a function that can calculated the discount from your total purchase order. The discount will applied to your order if the minimum amount was fulfilled.

example :

```
discount terms

type of items : food
minimum buy : 20000
discount : 20%
```

```
getDiscount(20000, 'food') # => 4000
```

in this case we have purchase order for 20000 of food type's, and this purchase order is fulfilled the discount terms. Just calculated the discount amount with 20000\*20% so it will return 4000.

```
getDiscount(10000, 'food') # => 0
```

in this case we have purchase order for 10000 of food type's, and this purchase order is not fulfilled the discount terms. So we don't need to calculate the discount and just return 0.
