const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbname = 'shop'
const dbcol = 'products'

const settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

MongoClient.connect(url, settings, (error, client) => {
  if (error) {
    console.error('Index error: ', error)
    throw error
  }
  let collection = client.db(dbname).collection(dbcol)
  collection.dropIndex({
    'price': -1
  })
  collection.dropIndex({
    'name': 1
  })
  collection.dropIndex({
    'category': 1
  })
  client.close()
})
