const res = db.products.aggregate([
  { $match: { category: "fruit"}},
  {$sort: {price: -1}},
  {$limit: 5}
])
res.shellPrint()
