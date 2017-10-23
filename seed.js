const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/worldclock'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const timezones = db.collection('timezones')

  timezones.insertMany([
    { zone: 'Asia/Tokyo' },
    { zone: 'Asia/Dhaka' },
    { zone: 'Asia/Dubai' },
    { zone: 'Europe/Moscow' },
    { zone: 'Europe/Rome' },
    { zone: 'Europe/London' },
    { zone: 'America/Sao_Paulo' },
    { zone: 'America/New_York' },
    { zone: 'America/Los_Angeles' }
  ])
})
