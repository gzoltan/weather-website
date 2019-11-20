const request = require('request')

const forecast = (lat, long, callback) => { 

    const url = `https://api.darksky.net/forecast/6087cd1d4a404cceac32c14603ebbe5c/${long},${lat}?units=si`
    request.get({url, json: true}, (error, response) => {
        if (error) return error
        
        const {summary, precipProbability, temperature} = response.body.currently
        const {summary: dailySum} = response.body.daily
        const {timezone} = response.body
        return callback(null, {
            summary, precipProbability, temperature, dailySum, timezone
        })
    })
}

module.exports = forecast