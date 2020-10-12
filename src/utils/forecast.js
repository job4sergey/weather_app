const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://darksky.net/forecast/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Ahueene!')
        }
    })
}

module.exports = forecast