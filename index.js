const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/worldclock'
const express = require('express')
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const timezones = db.collection('timezones')

  app.use(express.static('./public'))

  app.get('/timezones', (req, res) => {
    timezones
      .find({})
      .toArray()
      .then(response => {
        res.send(response)
      })
      .catch(err => {
        console.error(err)
      })
  })

  app.listen('3000', () => console.log('Listening'))
})
