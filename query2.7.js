const res = db.products.aggregate(
    { "$unwind": "$category" },
    {
        "$group": {
            "_id": {
                'categories': '$category',
            },
            "count": { "$sum": 1 }
        }
    },
    { "$sort": { "_id.categories": 1 } },
    {
        "$group": {
            "_id": "$_id.categories",
            "count": { "$first": "$count" }
        }
    }
)
//print(tojson(res))
res.shellPrint()
