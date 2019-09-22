const dbname = 'shop'
const dbcol = 'products'
const connectionString = 'mongodb://localhost:27017'
const MongoClient = require('mongodb').MongoClient

const settings = {
  useNewUrlParser: true, useUnifiedTopology: true
}

MongoClient.connect(connectionString, settings, (error, client) => {
  if (error) {
    console.error('Critical connection failure', error)
    throw error
  }

  const product = ['chips', 'cola', 'beer', 'banana', 'peanuts']
  const category = ['snack', 'drink', 'fruit']
  function randomElement (list) {
    let r = Math.random() * list.length
    return list[Math.floor(r)]
  }

  let collection = client.db(dbname).collection(dbcol)
  let newDocs = []
  for (let i = 0; i < 100000; i++) {
    newDocs.push({
      name: randomElement(product),
      price: Math.round(Math.random() * 500 + 1),
      category: randomElement(category)
    })
  }
  collection.insertMany(newDocs, (error, result) => {
    if (error) {
      console.error('Could not insert', error)
      throw error
    }
    console.log('Inserted new documents!', result)
    process.exit(0)
  })
})
