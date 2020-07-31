const axios = require("axios");

function fixed(num) {
    return num.toFixed(6);
}

function coordinate(locations, type = 'gps') {
    locations = locations.map(ele => {
        return ele.map(fixed).join(',');
    }).join('|');
    return axios.get(`https://restapi.amap.com/v3/assistant/coordinate/convert`, {
        params: {
            locations: locations,
            coordsys: type,
            output: 'json',
            key: '212dafff51f98079d8935be29d4baee9'
        }
    }).then(res => {
        const data = res.data;
        if (data.status === 1) {
            return Promise.reject(data);
        }
        return data;
    }).then(data => {
        return data.locations.split(';').map(ele => {
            return ele.split(',').map(num => {
                return parseFloat(num, 10);
            });
        });
    });
}



exports.coordinate = coordinate;

