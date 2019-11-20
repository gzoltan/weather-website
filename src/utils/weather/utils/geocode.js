const request = require('request')

const geocode = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiaGVsbHJvdmVyIiwiYSI6ImNrMzAyY3RjNDBsYmozYnA4MWdxdnBkY3UifQ.Ab1GYOQMMwZCyoj-X9mkow`
    request.get({url, json: true}, (error, response) => {
        if (error) return callback(error, null)
        if (response.body.features.length < 1) return callback('Location not found. Please provide another location', null)
        return callback(null, {lat: response.body.features[0].geometry.coordinates[0], long: response.body.features[0].geometry.coordinates[1]})
    })
}

module.exports = geocode