const timeZones = (zones) => zones.map(zone => (
  {
    zone: zone.split('/').replace('_', ' '),
    time: moment().tz(zone).format('h:mm:ss a')
  }
))

console.log(timeZones)
