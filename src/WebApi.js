const axios = require("axios");
class WebApi {
    constructor(options) {
        this._key = options.key;
    }

    fetch(options = {}) {
        return axios
            .get(
                options.url,
                {
                    params: {
                        key: this._key,
                        ...options.params
                    }
                })
            .then(res => {
                let data = res.data;
                if (data.status === 1) {
                    throw new Error(JSON.stringify(data));
                }
                return data;
            });
    }
}

module.exports = WebApi;