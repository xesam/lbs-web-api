const Regeo = require('../src/Regeo');

const regeo = new Regeo({
    key: '--'
});
regeo.regeo().then(res => {
    console.log(res);
}).catch(err => {

    console.log(err);
});