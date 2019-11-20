const weather = (location, callback) => {
    if (!location) return callback('Please provide a location', null)
    fetch(`/weather?location=${location}`).then(response => {
        response.json().then(data => {
            callback(null, data)
        })
    })  
}

weather('wien', (error, response) => {
    document.getElementById('weather-preload').innerHTML = '<img src="/img/weather-preload.gif" width="55" >'
    if (error) return console.log(error)
    console.log(response.data)
    setTimeout(() => {
        document.getElementById('weather-title').innerHTML = "<strong>Today's weather: </strong>"
        document.getElementById('weather-info').innerHTML = response.data.summary + '<div>' + Math.round(response.data.temperature) + '°C</div>'
        document.getElementById('weather-preload').innerHTML = ''
    }, 1500);
})

