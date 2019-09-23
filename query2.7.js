print(db)
const res = db.products.aggregate(
    {
        "$group": {
            "_id":  '$category',
            "count": { "$sum": 1 }
        }
    }
)
res.pretty().shellPrint()
//print(tojson(res))
//res.shellPrint()
