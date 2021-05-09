# HOW MUCH DISCOUNT YOU WILL GET (MULTIPLE) ??

in this exercise, you should find out how much discount (with multiple discount applied) you will get when purchasing some items.

Make a function that can calculated the discount from your total purchase order. The discount will applied to your order if the minimum amount was fulfilled, with multiple discount applied you can have more than one discount applied.

example :

```
discount 1 terms

type of items : food
minimum buy : 20000
type of discount : percentage
value : 20%
```

```
discount 2 terms

type of items : food
minimum buy : 40000
type of discount : actual
value : 4000
```

```
getDiscount(50000, 'food') # => 14000
```

in this case we have purchase order for 50000 of food type's, and this purchase order is fulfilled the discount 1 terms and discount 2 terms. Calculate both discounts applied, discount 1 type of discount is percentage so it will calculated like this 50000\*20% = 10000 and because discount 2 type is actual discount so it just give the discount value = 4000. Then returning total of both discounts 10000 + 4000 = 14000.

```
getDiscount(2000, 'food') # => 14000
```

in this case we have purchase order for 20000 of food type's, and this purchase order is only fulfilled the discount 1 terms. Calculate only discounts applied, discount 1 type of discount is percentage so it will calculated like this 20000\*20% = 4000.

```
getDiscount(10000, 'food') # => 0
```

in this case we have purchase order for 10000 of food type's, and this purchase order is not fulfilled any discount terms. So we don't need to calculate the discount and just return 0.
