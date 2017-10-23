const $time = document.querySelector('times')

const times = zones =>
  zones.map(({ zone }) => ({
    zone: zone.split('/')[1].replace('_', ' '),
    time: moment()
      .tz(zone)
      .format('h:mm:ss a')
  }))

const render = zone => {
  const $zone = document.createElement('div')
  const $name = document.createElement('div')
  const $time = document.createElement('div')

  $zone.classList.add('time')

  $name.classList.add('zone')
  $name.textContent = zone.zone

  $time.classList.add('time')
  $time.textContent = zone.time

  $zone.append($name, $time)
  return $zone
}

const timeZones = () => {
  return fetch('/timezones').then(res => res.json())
}

const doWerk = () => {
  timeZones()
    .then(data => times(data))
    .then(data => data.map(render))
    .then(data => {
      document.querySelector('#times').innerHTML = ''
      data.forEach(element => {
        document.querySelector('#times').appendChild(element)
      })
    })
}
