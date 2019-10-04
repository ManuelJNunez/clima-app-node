const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=78834e9f9cf4a1c4b81c8dbcae96eb25&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};