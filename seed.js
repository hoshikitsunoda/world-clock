const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/worldclock'

MongoClient.connect(url, (error, db) => {
  const timezones = db.collection('timezones')

  timezones
    .fint({})
    .toArray()
    .then(results => {
      timezones
        .insertMany([])
        .then(() => db.close())
        .catch(err => console.error(err))
        .then(() => db.close())
    })
    .catch(err => console.error(err))
})
