const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const weather = (location, callback) => {
    if (!location) return callback('Please provide a location', null)
    geocode(location, (error, data) => {
        if (error) return callback(error, null)
        forecast(data.lat, data.long, (error, forecastData) => {
            if (error) return callback(error, null)
            return callback(null, forecastData)
        })
        
    })
}

module.exports = weather