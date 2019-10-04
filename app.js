const axios = require('axios');
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(37.189999, -3.610000)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp} ºC.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);