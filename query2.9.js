const res = db.products.aggregate([ {$sort: {name: 1}},  {$limit: 20}, {$skip: 19}])

res.shellPrint()
