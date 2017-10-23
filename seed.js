const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/worldclock'

MongoClient.connect(url, (error, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const timezones = db.collection('timezones')

  timezones
    .fint({})
    .toArray()
    .then(results => {
      timezones
        .insertMany([
          'Asia/Tokyo',
          'Asia/Dhaka',
          'Asia/Dubai',
          'Europe/Moscow',
          'Europe/Rome',
          'Europe/London',
          'America/Sao_Paulo'
          'America/New_York',
          'America/Los_Angeles'
        ]).map(zone => {
          zone: zone
        })
        .then(() => db.close())
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})
