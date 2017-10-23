const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/worldclock'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const timezones = db.collection('timezones')

      timezones
      .insertMany([
        { timezone: 'Asia/Tokyo' },
        { timezone: 'Asia/Dhaka' },
        { timezone: 'Asia/Dubai' },
        { timezone: 'Europe/Moscow' },
        { timezone: 'Europe/Rome' },
        { timezone: 'Europe/London' },
        { timezone: 'America/Sao_Paulo' },
        { timezone: 'America/New_York' },
        { timezone: 'America/Los_Angeles' },
      ])
  })
