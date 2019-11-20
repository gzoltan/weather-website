const weather = (location, callback) => {
    if (!location) return callback('Please provide a location', null)
    fetch(`/weather?location=${location}`).then(response => {
        response.json().then(data => {
            if (data.error) return callback(data.error)
            callback(null, data)
        })
    })  
}




document.getElementById('weather-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const search = document.getElementById('search-input').value
    document.getElementById('weather-preload').innerHTML = '<img src="/img/weather-preload.gif" width="55" >'
    document.getElementById('weather-info').innerHTML = ''
    document.getElementById('weather-title').innerHTML = ''
    weather(search, (error, response) => {
        if (error) {
            document.getElementById('weather-preload').innerHTML = ''
            return document.getElementById('weather-info').innerHTML = "<div style='color: red'>" + error + "</div>"
        }
        document.getElementById('weather-title').innerHTML = "<big>"+  response.data.placeName +"</big> </strong>"
        document.getElementById('weather-info').innerHTML = response.data.summary + '<div>' + Math.round(response.data.temperature) + '°C</div>'
        document.getElementById('weather-preload').innerHTML = ''
    })
})