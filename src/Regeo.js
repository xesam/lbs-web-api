const Coordinate = require('./lbs/Coordinate');
const WebApi = require('./WebApi');

class Regeo extends WebApi {
    constructor(options) {
        super(options);
    }
    regeo(coordinate) {
        return this.fetch({
            url: 'https://restapi.amap.com/v3/geocode/regeo',
            params: {
                location: '116.481488,39.990464'
            }
        });
    }
}

module.exports = Regeo;