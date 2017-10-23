const timeZones = (zones) => zones.map(zone => (
  {
    zone: zone.split('/').replace('_', ' '),
    time: moment().tz(zone).format('h:mm:ss a')
  }
))

const $time = document.createElement('div')
const $value = document.createElement('div')

$time.setAttribute('class', 'time')

const setTime = (time) => {
  $value.setAttribute('class', 'value')
  $value.textContent = `
    ${time.zone}
    ${time.time}
  `
  return $value
}

$time.appendChild(setTime($value))
document.body.appendChild($time)
