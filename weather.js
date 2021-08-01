var location = 'Your place'

function weather() {
    const weather = require('weather-api-data');
    weather.loction(location).then(weather => console.log(weather));
    return weather;
}

console.log('Fetching .', '.', '.', '.', '.');
weather()
